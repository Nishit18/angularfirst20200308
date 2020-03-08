import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquityShareListService {

  constructor(private http: HttpClient) { }

  url: 'http://angularapi.somee.com/api';

  getEquiryShare() {
    return this.http.post('http://angularapi.somee.com/api/EquityShare/GetEquityShare', {});
  }
}
