import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    
    // get coordinates to push to database to match with others
    if (!navigator.geolocation) {
      console.log("location is not supported")
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.latitude}, lon" ${position.coords.longitude}`) 
    })

    
  }
   
}
