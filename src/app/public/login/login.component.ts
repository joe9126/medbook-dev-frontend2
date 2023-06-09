import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginform: FormGroup;

  constructor(private fb : FormBuilder, private http: HttpClient, private router : Router){
    this.loginform = this.fb.group({});
  }

  ngOnInit(){
    this.loginform = this.fb.group({
      email:'',
      password:''
    });
  }

  submitLogin() {
      //console.log(this.loginform.getRawValue());
      const formData = this.loginform.getRawValue();
      const logindata = {
        username : formData.email,
        password : formData.password,
        client_id: 2,
        client_secret : 'xmN57xO2nScWW1j0LrzbO6tLniywtpdhSH8m1aGj',
        grant_type: 'password',
        scope: '*'
      }
      this.http.post("http://localhost:8000/oauth/token",  logindata).subscribe(
         (result: any) =>{
         // console.log("success");
         // console.log(result);
         localStorage.setItem('token', result.access_token); // store user access token in local storage
         this.router.navigate(['/secure']); // navigate to secure component if user is authenticated
         },
         error =>{
          console.log("failed");
          console.log(error);
         }
      )
    }
}
