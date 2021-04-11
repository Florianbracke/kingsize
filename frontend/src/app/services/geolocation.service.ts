import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {
    
  lat:number;
  lon:number;

  constructor() { }

  ngOnInit() {
    this.getUserLocation();
 }

 getUserLocation() {

    if (navigator.geolocation) {

     navigator.geolocation.getCurrentPosition(position => {

         this.lat = position.coords.latitude;

         this.lon = position.coords.longitude;
         
       });

 }else {
    console.log("User not allow")

 }console.log(this.lat + this.lon)
}

}


// if (!navigator.geolocation) {
//   console.log("location is not supported")
// }
// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(`lat: ${position.coords.latitude}, lon" ${position.coords.longitude}`) 



// const A = position.coords.latitude * Math.PI/180; // φ, λ in radians
// const B = lat2 * Math.PI/180;
// const C = (lat2-position.coords.latitude) * Math.PI/180;
// const D = (lon2-position.coords.longitude) * Math.PI/180;

// Haversine formula !!




// })