import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm = this.fb.group({
    firstName : ['Fran', Validators.required],
    lastName : ['Andries', Validators.required],
    dogOwner : [true],
    dogWalker : [false],
    adress : this.fb.group({
      street : ['Oedelemse Steenweg', Validators.required],
      number : ['56', Validators.required],
      zipcode : ['8340', Validators.required],
      city : ['Sijsele', Validators.required],
    }),
    dogProfile : this.fb.group({
      dog : ['German Shepard'],
      dogName : ['Charlie'],
      dogAge : ['6'],
      children : ['Yes'],
      leash : ['He will pull on the leash'],
    }),
    walkerProfile : this.fb.group({
      breed : [''],
      experience : [''],
    }),
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  
}
