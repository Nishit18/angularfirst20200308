import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { AfterLayoutComponent } from './layout/after-layout/after-layout.component';
import { BlankComponent } from './common/blank/blank.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { 
    path: '',
    component: AfterLayoutComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'blank', component: BlankComponent },
      { path: 'page-not-found', component: PageNotFoundComponent },
      { path: 'user', component: UserComponent }
    ]
  },

  { path: 'forgot-password', component: ForgotPasswordComponent }

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
