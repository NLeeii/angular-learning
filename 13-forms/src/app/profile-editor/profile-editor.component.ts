import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {

  // FormBuilder =============================
  // control()、group()、array()
  // FormArray
  // 不需要為每個control命名 / 適合用於"事先不知道子值的數量"的情況

  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  // profileForm = new FormGroup({
  //   firstName: new FormControl('', {
  //     validators: Validators.required
  //   }),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  //   aliases: new FormArray([
  //     new FormControl(''),
  //     new FormControl(''),
  //     new FormControl(''),
  //   ])
  // });

  // get() 是 FormGroup 內建的方法。從大表單裡面，將指定名稱的那個子控制項抓出來。
  // as 是 TypeScript 的 型別斷言 (Type Assertion)。
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
  

  onSubmit() {
    console.log(this.profileForm.value); 
    console.log(this.profileForm); 
  }

  // setValue() vs. patchValue()
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nicole',
      address: {
        street: '123 Drew Street',
      },
    })
  }
}
