import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit{
  user: any;
  userlist: any;
  constructor(private http: HttpClient){
    this.user= null;
  }

  ngOnInit() {
   const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
   });
   //console.log(localStorage.getItem('token'));
    this.http.get("http://localhost:8000/user",{headers:headers}).subscribe(
      (result : any) =>{
        this.user = result;
      },
      error=>{
        console.log("failed");
        console.log(error);
      }
    );

    this.http.get("http://localhost:8000/users",{headers:headers}).subscribe(
      (result : any)=>{
          this.userlist = result;
      },
      error =>{
        console.log("failed");
      }
    )

  }
}
