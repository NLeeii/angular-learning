import { Component, Output, EventEmitter, signal, output } from '@angular/core';
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

  // @Output() calculate = new EventEmitter<InvestmentInput>();
  calculate = output<InvestmentInput>();

  enteredInit = signal('0');
  enteredAnnual = signal('0');
  enteredExpected = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      // 一樣要加上()，才可以emit"存在signal中的數據"，而不是signal本身
      initialInvestment: +this.enteredInit(), // 加上 "+" 轉成 number type
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpected(),
      annualInvestment: +this.enteredAnnual()
    });

    // 表單按送出按鈕後，重置input為初始值
    this.enteredInit.set('0');
    this.enteredAnnual.set('0');
    this.enteredExpected.set('5');
    this.enteredDuration.set('10');
  }

}
