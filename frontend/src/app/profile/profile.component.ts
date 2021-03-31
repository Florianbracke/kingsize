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
    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    dogOwner : [false],
    dogWalker : [false],
    adress : this.fb.group({
      street : ['', Validators.required],
      number : ['', Validators.required],
      zipcode : ['', Validators.required],
      city : ['', Validators.required],
    }),
    dogProfile : this.fb.group({
      dog : [''],
      dogName : [''],
      dogAge : [''],
      children : [''],
      leash : [''],
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
