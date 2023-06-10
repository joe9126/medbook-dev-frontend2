import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
 pagetitle = "Register Patient";
 registerPatientform : FormGroup;
 patients : any;
 headers : HttpHeaders;
 constructor(private fb:FormBuilder, private http: HttpClient){
  this.registerPatientform = this.fb.group({});

 this.headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
   });

   this.patients =this.getPatients();
 }

 ngOnInit() {
   this.registerPatientform = this.fb.group({
    name:['',Validators.required],
    dob:['',Validators.required],
    gender:['',Validators.required],
    servicetype:['',Validators.required],
    comment:['',Validators.required]
   });


 }

 registerPatient(){
  const formData = this.registerPatientform.getRawValue();
  const patientdata = {
    name : formData.name,
    dob : formData.dob,
    gender: formData.gender,
    servicetype: formData.servicetype,
    comment: formData.comment
  }


  this.http.post("http://localhost:8000/register_patient",patientdata,{headers:this.headers}).subscribe(
    (result:any)=>{
     this.patients = result;
     console.log(result.patients);
    },
    error=>{
      console.log(error);
    }
  )


 }

 onFocusLost(event:any){

 }

 getPatients(){
  this.http.get("http://localhost:8000/patients",{headers:this.headers}).subscribe(
    result=>{
     this.patients = result;
     //console.log(this.patients);
    },
    error=>{
      console.log(error);
    }
  )
 }
}
