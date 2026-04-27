import { Injectable } from "@angular/core";
import type { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn: "root"})
export class InvestmentService {

  resultData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];

  CalculateInvestmentResults(data: InvestmentInput) {
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
    // this.resultsData.set(annualData);

    this.resultData = annualData;
    
  }
}