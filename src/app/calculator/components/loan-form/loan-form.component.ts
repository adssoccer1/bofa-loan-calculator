import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LoanService } from '../../../services/loan.service';
import { LoanInput, AmortizationRow, LoanSummary } from '../../../models/loan.model';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {
  loanForm!: UntypedFormGroup;
  summary: LoanSummary | null = null;
  schedule: AmortizationRow[] = [];
  hasCalculated = false;

  loanTypes = [
    { value: 'mortgage', label: 'Home Mortgage' },
    { value: 'auto', label: 'Auto Loan' },
    { value: 'personal', label: 'Personal Loan' }
  ];

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loanForm = new UntypedFormGroup({
      principal: new UntypedFormControl(250000, [Validators.required, Validators.min(1000)]),
      annualRate: new UntypedFormControl(6.5, [Validators.required, Validators.min(0.1), Validators.max(30)]),
      termYears: new UntypedFormControl(30, [Validators.required, Validators.min(1), Validators.max(40)]),
      loanType: new UntypedFormControl('mortgage', [Validators.required])
    });
  }

  calculate(): void {
    if (this.loanForm.valid) {
      const input: LoanInput = this.loanForm.value;
      this.summary = this.loanService.getLoanSummary(input);
      this.schedule = this.loanService.generateAmortizationSchedule(input);
      this.hasCalculated = true;
    }
  }

  reset(): void {
    this.loanForm.reset({
      principal: 250000,
      annualRate: 6.5,
      termYears: 30,
      loanType: 'mortgage'
    });
    this.summary = null;
    this.schedule = [];
    this.hasCalculated = false;
  }
}
