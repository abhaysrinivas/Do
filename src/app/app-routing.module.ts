import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { CanActivate } from '@angular/router';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' ,canActivate: [AuthGuardService]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuardService]},
  { path: '',  redirectTo: 'login',pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
