import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputEmail = 'Nishit';
  inputPassword = 'Nishit';

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'bg-dark');
  }

  ngOnInit() {
  }

}
