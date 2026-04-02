import { TestBed } from '@angular/core/testing';
import { LoanService } from './loan.service';
import { LoanInput } from '../models/loan.model';

describe('LoanService', () => {
  let service: LoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate monthly payment correctly', () => {
    const input: LoanInput = {
      principal: 200000,
      annualRate: 6.5,
      termYears: 30,
      loanType: 'mortgage'
    };
    const payment = service.calculateMonthlyPayment(input);
    expect(payment).toBeCloseTo(1264.14, 1);
  });

  it('should generate amortization schedule with correct number of rows', () => {
    const input: LoanInput = {
      principal: 10000,
      annualRate: 5,
      termYears: 1,
      loanType: 'personal'
    };
    const schedule = service.generateAmortizationSchedule(input);
    expect(schedule.length).toBe(12);
  });

  it('should return a loan summary', () => {
    const input: LoanInput = {
      principal: 25000,
      annualRate: 4.5,
      termYears: 5,
      loanType: 'auto'
    };
    const summary = service.getLoanSummary(input);
    expect(summary.principal).toBe(25000);
    expect(summary.totalInterest).toBeGreaterThan(0);
    expect(summary.monthlyPayment).toBeGreaterThan(0);
  });
});
