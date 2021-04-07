import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
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

  email: string;
  password:string;
  
  signInForm = this.fb.group({
    email : ['', Validators.required],
    password : ['', Validators.required],
    })

  signUpForm = this.fb.group({
    email_signUp : ['', Validators.required],
    password_signUp : ['', Validators.required],
    })

constructor (private fb: FormBuilder,private apiService: ApiService,private http: HttpClient) {
  
}

onSubmit() {
  //Use EventEmitter with form value
   console.warn(this.signUpForm.value);
   //console.warn(this.signInForm.value);
}


newAccount() {
  return this.http.post<any>('http://localhost:3000/login', this.signUpForm.value,).subscribe(data => {
  console.log(this.signUpForm.value)
  })
}

emailVerification(){

   this.http.post<any>('http://localhost:3000/Email', this.signInForm.value,).subscribe(data => {
    
      console.log(data)

      if (data.length == 0 ) {
        
        alert('please use a valid email adress and password, Or sign up first!')

      } 
    })
}
 
  


} 
