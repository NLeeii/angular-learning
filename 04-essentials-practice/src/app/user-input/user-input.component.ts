import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInit = '0';
  enteredAnnual = '0';
  enteredExpected = '5';
  enteredDuration = '5';

  onSubmit() {
    console.log(this.enteredInit);
  }

}
