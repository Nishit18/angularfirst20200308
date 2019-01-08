import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { URLSearchParams } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost/AngularFirstService/api';

  getUsers() {
    return this.http.get<string[]>(this.url + '/Values');
  }
  getAllUsers() {
    return this.http.get<User[]>(this.url + '/User/GetAllEmployeesList');
  }
  removeUser(id: number) {
    // let user=new URLSearchParams();
    // user.append('Id','1');
    return this.http.post<object>(this.url + '/User/RemoveUser',{'Id':id});
  }
}
