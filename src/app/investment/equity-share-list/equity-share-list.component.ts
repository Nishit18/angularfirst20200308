import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EquityShareListService } from '../../service/equity-share-list.service';
import { MatTableDataSource, MatSortModule, MatSort, MatPaginatorModule, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-equity-share-list',
  templateUrl: './equity-share-list.component.html',
  styleUrls: ['./equity-share-list.component.css']
})
export class EquityShareListComponent implements OnInit, AfterViewInit {

  constructor(private equityShareListService: EquityShareListService) { }

  displayedColumns: string[] = [
    'ShareID',
    'ShareCode',
    'ShareName',
    'StockExchange',
    'TransactionDate',
    'Quantity',
    'Rate',
    'TotalAmount',
    'TotalCharge',
    'Action',
    'Remark'
  ];
  public shareArray = new MatTableDataSource<object>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getEquiryShare();
  }

  ngAfterViewInit(): void {
    this.shareArray.sort = this.sort;
    this.shareArray.paginator = this.paginator;
  }

  getEquiryShare() {
    this.equityShareListService.getEquiryShare()
      .subscribe(data => {
        this.shareArray.data = data as object[];
      });
  }

  public doFilter = (value: string) => {
    this.shareArray.filter = value.trim().toLocaleLowerCase();
  }
}
