import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { NavbarComponent } from '../app/components/shared/navbar/navbar.component';
import { SigninComponent } from '../app/components/auth/signin/signin.component';
import { SignupComponent } from '../app/components/auth/signup/signup.component';

const routes: Routes = [
  { path: '',                     component: HomeComponent },
  { path: 'navi',                 component: NavbarComponent },
  { path: 'signin',               component: SigninComponent },
  { path: 'signup',               component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
