import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { AfterLayoutComponent } from './layout/after-layout/after-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './common/blank/blank.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AfterLayoutComponent,
    DashboardComponent,
    BlankComponent,
    PageNotFoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
