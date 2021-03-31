import { Component, OnInit } from '@angular/core';
import { loremIpsum } from "lorem-ipsum";
// const loremIpsum = require("lorem-ipsum").loremIpsum;



@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
   name='';
   location:string;
   imageSource:string;
   description:string;
   number:number=0
   
   //link this variable to database with pictures of the cute dogs and cute people that registered
   numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
   namesArray = ["Garlead bric", "Tomice Juato", "Spron Ioning", "Lav Ender", "Ber Cucum", "Mary Rose"]
   
 next(){
  console.log("111111Asd")
  this.location="Ghent";
  this.number++;
  this.imageSource = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
  this.name=this.namesArray[this.number];
  this.description='';
 }

 previous(){
  this.location="Ghent";
  console.log("2222Asd")
  this.number--;
  this.imageSource = `https://picsum.photos/id/${this.numberArray[this.number]}/900/500`;
  this.name=this.namesArray[this.number];
  this.description='';

 }
 
connect(){


  return this.description = loremIpsum();
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
