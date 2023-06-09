import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PublicComponent } from './public/public.component';

import { BrowserModule } from '@angular/platform-browser';
import { SecureComponent } from './secure/secure.component';

import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { RegisterComponent } from './secure/register/register.component';

const routes : Routes = [
  {path: '', component : PublicComponent,
    children:[
      {path:'', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },

  {path: '', component : SecureComponent,
  children:[
    {path:'register',component:RegisterComponent}
  ]
},

] ;

@NgModule({
  declarations: [],
  imports: [ BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
