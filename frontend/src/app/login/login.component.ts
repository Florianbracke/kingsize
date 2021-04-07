import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ApiService } from '../services/api.service';
import { GeolocationService } from '../services/geolocation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  
  email_signUp:string;
  password_signUp:string;

  email: string ='';
  password:string ='';
  
  signInForm = this.fb.group({
    email : ['', Validators.required],
    password : ['', Validators.required],
    })

  signUpForm = this.fb.group({
    email_signUp : ['', Validators.required],
    password_signUp : ['', Validators.required],
    })

constructor (private fb: FormBuilder,private apiService: ApiService) {
  
}

onSubmit() {
  //Use EventEmitter with form value
   console.warn(this.signUpForm.value);
   //console.warn(this.signInForm.value);
}

newAccount() {

 return this.apiService.NewUserProfileData().subscribe(data => {
console.log(data)
    // this.email_signUp= data.email;

    // this.password_signUp= data.password;

  })
}

 
  


} 
