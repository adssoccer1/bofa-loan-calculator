import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { LoanFormComponent } from './loan-form.component';
import { LoanSummaryComponent } from '../loan-summary/loan-summary.component';
import { AmortizationTableComponent } from '../amortization-table/amortization-table.component';

describe('LoanFormComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanFormComponent, LoanSummaryComponent, AmortizationTableComponent],
      imports: [
        ReactiveFormsModule, NoopAnimationsModule,
        MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule, MatDividerModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.loanForm.get('principal')?.value).toBe(250000);
    expect(component.loanForm.get('annualRate')?.value).toBe(6.5);
    expect(component.loanForm.get('termYears')?.value).toBe(30);
    expect(component.loanForm.get('loanType')?.value).toBe('mortgage');
  });

  it('should calculate when form is valid', () => {
    component.calculate();
    expect(component.hasCalculated).toBeTrue();
    expect(component.summary).toBeTruthy();
    expect(component.schedule.length).toBeGreaterThan(0);
  });
});
