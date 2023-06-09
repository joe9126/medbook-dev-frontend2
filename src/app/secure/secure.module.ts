import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SecureComponent } from './secure.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    SecureComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[

  ]
})
export class SecureModule { }
