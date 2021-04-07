import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { GeolocationService } from '../services/geolocation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent { 

  alertMessage:string;
  confirmMessage:string;

  loginAlertMessage:string;
  loginConfirmMessage:string;

  newUser:string;

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

constructor (private fb: FormBuilder,private apiService: ApiService,private http: HttpClient,  private router:Router) {
  
}



newAccount() {
  console.log(this.signInForm.value.password_signUp);
  if (!this.signUpForm.value.email_signUp || !this.signUpForm.value.password_signUp) {

    this.alertMessage='please use a valid email adress and password!'

  } else {
    
    
    this.confirmMessage='You succesfully created your profile! Go and Sign-in! :)'
   
    this.http.post<any>('http://localhost:3000/login', this.signUpForm.value,).subscribe(data => {console.log(data)})
    
  }
}

emailVerification() {
  if (!this.signInForm.value.email || !this.signInForm.value.password) {

    this.loginAlertMessage='please use a valid email adress and password, Or sign-up first!'

  } else {
      this.http.post<any>('http://localhost:3000/Email', this.signInForm.value,).subscribe(data => {
      
        console.log(data)

        if (data.length == 0 ) {
          
          this.loginAlertMessage='please use a valid email adress and password, Or sign-up first!'

        } else {
          this.router.navigateByUrl('/Matches')
        }
      })
  }

}
 
  


} 
