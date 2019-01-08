import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];
  removeUserReturn:String='';

  ngOnInit() {
   this.getAllUsers();
  }

  removeUser(id){
    debugger;
    this.userService.removeUser(id).subscribe(data=>{
      this.removeUserReturn=String(data);
    });
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers()
      .subscribe( data => {
        this.users = data;
      });
  }
}
