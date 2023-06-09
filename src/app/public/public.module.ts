import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
//import { MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    AppRoutingModule,
   // FormsModule,
  //  ReactiveFormsModule
  ]
})
export class PublicModule { }
