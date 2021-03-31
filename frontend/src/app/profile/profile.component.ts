import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm = this.fb.group({
    firstName : [''],
    lastName : [''],
    adress : this.fb.group({
      street : [''],
      number : [''],
      zipcode : [''],
      city : [''],
    }),
  });

  constructor( private fb: FormBuilder) { }

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
