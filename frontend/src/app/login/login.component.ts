import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

profileForm: FormGroup;  //turned off TSconfig --strict false for this

ngOnInit() {
  this.profileForm = new FormGroup({
   
    email: new FormControl(null),
    password: new FormControl(null),
    dog: new FormControl('walker'),
    
  });
  
}

onSubmit() {
  console.log(this.profileForm);
  // console.log(this.profileForm.get(‘email’).value);
  }
}