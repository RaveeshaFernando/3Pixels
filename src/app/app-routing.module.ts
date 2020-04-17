import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { NavbarComponent } from '../app/components/shared/navbar/navbar.component';

const routes: Routes = [
  { path: '',                     component: HomeComponent },
  { path: 'navi',                 component: NavbarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
