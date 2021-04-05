import { Component, OnInit } from '@angular/core';
import { loremIpsum } from "lorem-ipsum";
// const loremIpsum = require("lorem-ipsum").loremIpsum;
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { GeolocationService } from '../services/geolocation.service';




@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})



export class MatchesComponent {
  

  
   location:string = "ghent";
   
   number:number = 1;
   
   //link this variable to database with pictures of the cute dogs and cute people that registered
   numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
   namesArray = ["Garlead bric", "Tomice Juato", "Spron Ioning", "Lav Ender", "Ber Cucum", "Mary Rose"]
   imageSource:string = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
   name=this.namesArray[this.number];

 next(){

  this.number++;

  

  this.name=this.namesArray[this.number];
  this.imageSource = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
 }

 previous(){

  this.number--;

  
  this.name=this.namesArray[this.number];
  this.imageSource = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
 }
 title: string = "testtt"
connect(){
   
}
  public users = [];
  
  constructor(private apiService: ApiService, private geolocationService: GeolocationService) {}

  
  ngOnInit() {

  const myObserver = {
    next: x => console.log('Observer got a next value: ' + x[1].first_name),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),



  };

  const myObservable = this.apiService.getData();
  myObservable.subscribe(myObserver);
    

  }
 
  

}
