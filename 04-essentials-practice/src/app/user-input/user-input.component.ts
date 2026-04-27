import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  // @Output() userInput = new EventEmitter();
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInit = '0';
  enteredAnnual = '0';
  enteredExpected = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInit, // 加上 "+" 轉成 number type
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpected,
      annualInvestment: +this.enteredAnnual

    })
  }

}
