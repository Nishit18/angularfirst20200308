import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { EquityShareComponent } from './investment/equity-share/equity-share.component';
import { EquityShareListComponent } from './investment/equity-share-list/equity-share-list.component';
import { from } from 'rxjs';

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
    UserComponent,
    EquityShareComponent,
    EquityShareListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
