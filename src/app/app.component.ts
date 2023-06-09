import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Odidi Clinic';
  loggedIn : boolean;
  constructor(private router : Router){
    this. loggedIn = false;
  }

  ngOnInit(){
      this.loggedIn = localStorage.getItem('token') !== null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
