import { Component, Input } from '@angular/core';
import { LoanSummary } from '../../../models/loan.model';

@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.scss']
})
export class LoanSummaryComponent {
  @Input() summary!: LoanSummary;
}
