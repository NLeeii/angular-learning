import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { type InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {

  // Signal
  resultsData = signal<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[] | undefined>(undefined); // signal需要一個初始值，可以是undefined
  // 會需要寫 {}[] | undefined 是因為初始值給undefined，TypeScript會自動推導resultsData的type就是undefined，但如果有收到結果回傳的話，這裡的type就會變成 {}[] ，因此才需要這樣寫，顯示有兩種可能。


  // 傳統用法
  // resultsData?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];

  onCalculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data; // 解構賦值 - Destructuring Assignment，快速把物件 (Object) 裡面的屬性「拆解」出來，並宣告成獨立變數。
    // 傳統寫法:
    // const initialInvestment = data.initialInvestment; const duration = data.duration; ...
    

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    // return annualData;
    // console.log(annualData);

    // resultData 是 signal，所以需要調用 set 這個method
    this.resultsData.set(annualData);
    
  }

}
