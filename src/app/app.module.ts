import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFormComponent } from './create-form/create-form.component';
import { EmailValidator } from './create-form/email.validator';
import { ReactiveFormsModule } from '@angular/forms';
import { AssetsTableComponent } from './assets-table/assets-table.component';
import { AssetsRowComponent } from './assets-row/assets-row.component'
import * as $ from 'jquery';
import { AdventureTimeService } from './dashboard/asset.service';



@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule ,BrowserAnimationsModule, ReactiveFormsModule],
    declarations: [AppComponent, LoginComponent, DashboardComponent, CreateFormComponent, EmailValidator, AssetsTableComponent, AssetsRowComponent],
    providers: [AuthGuardService,AdventureTimeService], 
    bootstrap: [AppComponent]
})
export class AppModule { }
