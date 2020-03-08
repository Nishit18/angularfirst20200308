import { Component, OnInit } from '@angular/core';
import { EquityShareService } from '../../service/equity-share.service';
import { QueryValueType } from '@angular/core/src/view';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-equity-share',
  templateUrl: './equity-share.component.html',
  styleUrls: ['./equity-share.component.css']
})
export class EquityShareComponent implements OnInit {

  constructor(private equityShareService: EquityShareService) { }

  ShareID = 0;
  ShareCode = '';
  ShareName = '';
  StockExchange = 'NSE';
  TransactionDate = '';
  Quantity = '';
  Rate = '';
  TotalAmount = '';
  TotalCharge = '';
  Action = 'BUY';
  Remark = '';

  ngOnInit() {
  }

  saveEquityShare() {
    if (this.ShareCode === '' || this.ShareCode === undefined) {
      alert('Please enter share code');
      return;
    }
    if (this.ShareName === '' || this.ShareName === undefined) {
      alert('Please enter share name');
      return;
    }
    if (this.TransactionDate === '' || this.TransactionDate === undefined) {
      alert('Please select or enter transaction date');
      return;
    }
    if (this.Quantity === '' || this.Quantity === undefined) {
      alert('Please enter quantity');
      return;
    }
    if (parseFloat(this.Quantity) === 0) {
      alert('Please enter quantity greter than zero');
      return;
    }
    if (this.Rate === '' || this.Rate === undefined) {
      alert('Please enter rate');
      return;
    }
    if (parseFloat(this.Rate) === 0) {
      alert('Please enter rate greter than zero');
      return;
    }
    if (this.TotalCharge === '' || this.TotalCharge === undefined) {
      alert('Please enter total charge');
      return;
    }
    if (parseFloat(this.TotalCharge) === 0) {
      alert('Please enter total charge greter than zero');
      return;
    }
    if (this.Remark === '' || this.Remark === undefined) {
      alert('Please enter remark');
      return;
    }
    this.equityShareService
      .saveEquityShare(
        this.ShareID,
        this.ShareCode,
        this.ShareName,
        this.StockExchange,
        this.TransactionDate,
        this.Quantity,
        this.Rate,
        this.TotalAmount,
        this.TotalCharge,
        this.Action,
        this.Remark)
      .subscribe(data => {
        // console.log(data);
        alert(data);
        this.clearEquityShare();
      });
  }

  clearEquityShare() {
    this.ShareID = 0;
    this.ShareCode = '';
    this.ShareName = '';
    this.StockExchange = 'NSE';
    this.TransactionDate = '';
    this.Quantity = '';
    this.Rate = '';
    this.TotalAmount = '';
    this.TotalCharge = '';
    this.Action = 'BUY';
    this.Remark = '';
  }

  changeTotalAmount() {
    if (this.Quantity === '' || this.Rate === '') {
      this.TotalAmount = '';
    } else if (parseFloat(this.Quantity) === 0 || parseFloat(this.Rate) === 0) {
      this.TotalAmount = '0';
    } else {
      this.TotalAmount = (parseFloat(this.Quantity) * parseFloat(this.Rate)).toFixed(2);
    }
  }
}

// export interface Share {
//   ShareID: number;
//   ShareCode;
//   ShareName;
//   StockExchange;
//   TransactionDate;
//   Quantity;
//   Rate;
//   TotalAmount;
//   TotalCharge;
//   Action;
//   Remark;
// }
