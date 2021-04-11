import { Component, OnInit } from '@angular/core';
import { loremIpsum } from "lorem-ipsum";
// const loremIpsum = require("lorem-ipsum").loremIpsum;
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { GeolocationService } from '../services/geolocation.service';
import { user } from '../controllers/user';
import { of } from 'rxjs';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

  
 //==============================\\

export class MatchesComponent {
 
  number:number= 0;

//userData() variables
  user:any;
  user_id:any=0;
  user_firstname:any;
  user_lastname:any;
  user_dog_owner:any;
  user_lat:any;
  user_lon:any;
  user_description:any;
  user_email:any;
  
//connectUser() variables
  id_connection:any = 1;      // is going to be the id of the one who is logged in!
  first_name_connection:any;
  last_name_connection:any;
  JsonId = {'id': ''};


//next() and previous() variables
  connection:boolean;
  connectionMessage:string;
  startMessage:string= "Click Next to start!";

//getDistance() variables
  lat_profile:any;
  lon_profile:number;
  lat_user:number;
  lon_user:number;
  distance:number;
  distanceMessage:string;

 //link this variable to database with pictures of the cute dogs and cute people that registered
  numberArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

  imageSource:string = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
  
 //==============================\\

  constructor(
    private apiService: ApiService,
    private geolocationService: GeolocationService,
    private http: HttpClient,
    
    )
  {
    //this.userData()
  }
    
 //=================functions===================\\

  userData(){
  
    this.http.get(`http://localhost:3000/homepage/${this.user_id}`).subscribe(data => {
      this.user_id                 = data[0].id 
      this.user_firstname          = data[0].first_name
      this.user_lastname           = data[0].last_name
      this.user_description        = data[0].description
      this.user_lat                = data[0].lat
      this.user_lon                = data[0].lon

       this.getDistance()
    })
  }

  next(){
  this.number++;
  this.user_id++; console.log(this.user_id)
  this.userData();
  this.connectionMessage ='';
  this.startMessage='';
  this.imageSource = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
  }

  previous(){
  this.number--;
  this.user_id--;
  this.userData();
  this.connectionMessage ='';
  this.startMessage='';
  this.imageSource = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
  }

  connect(){

    this.connection = true;

      if (this.connection) {

          this.connectionMessage = "You send this user a connection request!"

          this.connection = false;
          
          this.connectUser()

      } else {

      this.connectionMessage ='';

      }
  }

  getDistance(){
   
    this.lat_profile = 51.052664;
    this.lon_profile = 3.708890;

    const R = 6371; //radius earth km
    
    let degree_lat = this.degreeToRadial(this.lat_profile-(+this.user_lat));
    let degree_lon = this.degreeToRadial(this.lon_profile-(+this.user_lon));

    let A = Math.sin(degree_lat/2) * Math.sin(degree_lon/2) +
            Math.cos(this.degreeToRadial(+this.user_lat)) * Math.cos(this.degreeToRadial(+this.user_lon)) *
            Math.sin(degree_lon/2) * Math.sin(degree_lon/2);
            
    let B = 2* Math.atan2(Math.sqrt(A), Math.sqrt(1-A));

    this.distance = R * B;console.log(this.distance)
    this.distanceMessage="km"
    return this.distance
    
  }

  degreeToRadial(deg){
    return deg * (Math.PI/180)
  }

  connectUser(){


    let IdData = {id : this.user_id}
    this.http.post(`http://localhost:3000/yes`, IdData).subscribe(data => {
      console.log( data, IdData);
    return data;
    })
  }

}
  


