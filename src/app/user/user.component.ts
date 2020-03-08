import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];
  removeUserReturn = '';
  firstName = 'Employee_1231';
  lastName = 'User_1231';
  emailAddress = 'user_1231@yahoo.in';
  pwd = 'test@123';
  confirmPwd = 'test@123';
  saveUserReturn = '';

  ngOnInit() {
    this.getAllUsers();
  }

  removeUser(id) {
    this.userService.removeUser(id).subscribe(data => {
      this.removeUserReturn = String(data);
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      });
  }

  addUser() {
    this.userService.saveUser(this.firstName, this.lastName, this.emailAddress, this.pwd).subscribe(data => {
      this.saveUserReturn = String(data);
      this.getAllUsers();
    });
  }
}
