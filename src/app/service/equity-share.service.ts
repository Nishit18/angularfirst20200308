import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquityShareService {

  constructor(private http: HttpClient) { }

  // url: string = 'http://localhost/AngularFirstService/api';
  // url: string = 'http://localhost:53601/api';
  url = 'http://angularapi.somee.com/api';

  saveEquityShare(ShareID: number,
    ShareCode: string,
    ShareName: string,
    StockExchange: string,
    TransactionDate: string,
    Quantity: string,
    Rate: string,
    TotalAmount: string,
    TotalCharge: string,
    Action: string,
    Remark: string) {
    return this.http.post<object>('http://angularapi.somee.com/api/EquityShare/SaveEquityShare', {
      'MethodName': 'AddUser',
      'JsonRequest': {
        ShareID: ShareID,
        ShareCode: ShareCode,
        ShareName: ShareName,
        StockExchange: StockExchange,
        TransactionDate: TransactionDate,
        Quantity: Quantity,
        Rate: Rate,
        TotalAmount: TotalAmount,
        TotalCharge: TotalCharge,
        Action: Action,
        Remark: Remark
      }
    }
    );
  }
}
