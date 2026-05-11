import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';

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

export class LoginComponent {
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
