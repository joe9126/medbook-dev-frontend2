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
 constructor(private fb:FormBuilder, private http: HttpClient){
  this.registerPatientform = this.fb.group({});
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
  console.log(patientdata);
  const header = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
   });

  this.http.post("http://localhost:8000/register_patient",patientdata,{headers:header}).subscribe(
    result=>{
      console.log(result);
    },
    error=>{
      console.log(error);
    }
  )


 }
}
