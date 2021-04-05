import { Component, OnInit } from '@angular/core';
import { loremIpsum } from "lorem-ipsum";
// const loremIpsum = require("lorem-ipsum").loremIpsum;
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { GeolocationService } from '../services/geolocation.service';
import { user } from '../controllers/user';
import { of } from 'rxjs';




@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

  
 //==============================\\

export class MatchesComponent {
  
  number:number = 1;

  user_firstname:any;
  user_lastname:any;
  user_dog_owner:any;
  user_lat:any;
  user_lon:any;
  user_description:any;
  user_email:any;

 //link this variable to database with pictures of the cute dogs and cute people that registered
  numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

  imageSource:string = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
  
 //==============================\\

  constructor(private apiService: ApiService, private geolocationService: GeolocationService) {
    this.userData()
  }
    
 //==============================\\
  userData(){
    const myObeservable = this.apiService.getData()
    myObeservable.subscribe( data => this.user_firstname    = data[this.number].first_name);
    myObeservable.subscribe( data => this.user_lastname     = data[this.number].last_name);
    myObeservable.subscribe( data => this.user_dog_owner    = data[this.number].dog_owner);
    myObeservable.subscribe( data => this.user_lat          = data[this.number].lat);
    myObeservable.subscribe( data => this.user_lon          = data[this.number].lon);
    myObeservable.subscribe( data => this.user_description  = data[this.number].description);
    myObeservable.subscribe( data => this.user_email        = data[this.number].email);
  }

 
  next(){
  this.number++;
  this.userData();
  this.imageSource = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
  }

  previous(){

  this.number--;
  this.userData();
  this.imageSource = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
  }


  connect(){
    alert("idk man, you kinda ugly")
  }

}
  


