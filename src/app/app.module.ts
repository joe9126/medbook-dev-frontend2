import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';

import { RouterModule } from '@angular/router';
import { SecureModule } from './secure/secure.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    PublicModule,
    SecureModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  title = "MedBook App";

  constructor(){}

  ngOnInit(): void {

  }
 }
