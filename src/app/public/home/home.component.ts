import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loggedIn : boolean;
  constructor(){
    this.loggedIn = false;
  }

  ngOnInit(){
    this.loggedIn = localStorage.getItem('token') !== null;
  }
}
