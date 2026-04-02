import { Component, Input, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AmortizationRow } from '../../../models/loan.model';

@Component({
  selector: 'app-amortization-table',
  templateUrl: './amortization-table.component.html',
  styleUrls: ['./amortization-table.component.scss']
})
export class AmortizationTableComponent implements AfterViewInit, OnChanges {
  @Input() schedule: AmortizationRow[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ['month', 'payment', 'principal', 'interest', 'balance'];
  dataSource = new MatTableDataSource<AmortizationRow>();

  ngOnChanges(): void {
    this.dataSource.data = this.schedule;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
