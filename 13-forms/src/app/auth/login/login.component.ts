import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounce, debounceTime, of } from 'rxjs';

// 自定義Validator
function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true };
}

// Async Validator
function emailIsUnique(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    return of(null);
  }

  return of({notUnique: true});
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  });

  // 簡單email欄位驗證
  // get 是一個用來封裝複雜邏輯判斷的極佳工具
  // 可比作為命名清晰、唯讀且隨時保持最新狀態的「虛擬屬性」
  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }
  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }

  ngOnInit(): void {
    const savedForm = window.localStorage.getItem('saved-login-form');

    if (savedForm) {
      const loadForm = JSON.parse(savedForm);

      // setValue 要求傳入的物件結構必須與表單完全一致，而 patchValue 允許只更新部分欄位
      this.form.patchValue({
        email: loadForm.email
      });
    }
    
    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: value => {
        window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email}));
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe()
    });
  }
  
  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, enteredPassword);
  }

  // ==========================
  // 舊的
  // form = new FormGroup({
  //   email: new FormControl('', {
  //     validators: [Validators.email, Validators.required]
  //   }),
  //   password: new FormControl('', {
  //     validators: [Validators.required, Validators.minLength(6)]
  //   }),
  // });

  // // 簡單email欄位驗證
  // // get 是一個用來封裝複雜邏輯判斷的極佳工具
  // // 可比作為命名清晰、唯讀且隨時保持最新狀態的「虛擬屬性」
  // get emailIsInvalid() {
  //   return (
  //     this.form.controls.email.touched &&
  //     this.form.controls.email.dirty &&
  //     this.form.controls.email.invalid
  //   );
  // }

  // // 簡單password欄位驗證
  // get passwordIsInvalid() {
  //   return (
  //     this.form.controls.password.touched &&
  //     this.form.controls.password.dirty &&
  //     this.form.controls.password.invalid
  //   );
  // }

  // onSubmit() {
  //   console.log(this.form);
  //   const enteredEmail = this.form.value.email;
  //   const enteredPassword = this.form.value.password;
  //   console.log(enteredEmail, '+', enteredPassword);
  // }
}
