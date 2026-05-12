import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name = new FormControl('');

  // setValue() - 更新表單控制元件值的方法
  updateName() {
    this.name.setValue('Nicole');
  }
}
