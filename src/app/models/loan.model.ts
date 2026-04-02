export interface LoanInput {
  principal: number;
  annualRate: number;
  termYears: number;
  loanType: 'mortgage' | 'auto' | 'personal';
}

export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface LoanSummary {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  annualRate: number;
  termYears: number;
  loanType: string;
}
