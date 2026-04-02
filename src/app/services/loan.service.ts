import { Injectable } from '@angular/core';
import { LoanInput, AmortizationRow, LoanSummary } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  calculateMonthlyPayment(input: LoanInput): number {
    const monthlyRate = input.annualRate / 100 / 12;
    const numPayments = input.termYears * 12;

    if (monthlyRate === 0) {
      return input.principal / numPayments;
    }

    const payment = input.principal *
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return Math.round(payment * 100) / 100;
  }

  generateAmortizationSchedule(input: LoanInput): AmortizationRow[] {
    const monthlyPayment = this.calculateMonthlyPayment(input);
    const monthlyRate = input.annualRate / 100 / 12;
    const numPayments = input.termYears * 12;
    const schedule: AmortizationRow[] = [];
    let balance = input.principal;

    for (let month = 1; month <= numPayments; month++) {
      const interest = Math.round(balance * monthlyRate * 100) / 100;
      const principal = Math.round((monthlyPayment - interest) * 100) / 100;
      balance = Math.round((balance - principal) * 100) / 100;

      if (balance < 0) balance = 0;

      schedule.push({
        month,
        payment: monthlyPayment,
        principal,
        interest,
        balance
      });
    }

    return schedule;
  }

  getLoanSummary(input: LoanInput): LoanSummary {
    const monthlyPayment = this.calculateMonthlyPayment(input);
    const totalPayment = Math.round(monthlyPayment * input.termYears * 12 * 100) / 100;
    const totalInterest = Math.round((totalPayment - input.principal) * 100) / 100;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
      principal: input.principal,
      annualRate: input.annualRate,
      termYears: input.termYears,
      loanType: input.loanType
    };
  }
}
