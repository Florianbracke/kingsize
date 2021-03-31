import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    adress : new FormGroup({
      street : new FormControl(''),
      number : new FormControl(''),
      zipcode : new FormControl(''),
      city : new FormControl(''),
    }),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName : 'Nancy',
      adress : {
        street : 'Dorpstraat',
      },
    });
  }
}
