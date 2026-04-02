import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';

import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { AmortizationTableComponent } from './components/amortization-table/amortization-table.component';
import { LoanSummaryComponent } from './components/loan-summary/loan-summary.component';

const routes: Routes = [
  { path: '', component: LoanFormComponent }
];

@NgModule({
  declarations: [
    LoanFormComponent,
    AmortizationTableComponent,
    LoanSummaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ]
})
export class CalculatorModule { }
