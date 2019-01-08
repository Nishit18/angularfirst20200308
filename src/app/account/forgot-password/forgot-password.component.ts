import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private renderer: Renderer2) { 
    this.renderer.addClass(document.body, 'bg-dark');
  }

  ngOnInit() {
  }

}
