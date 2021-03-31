import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }



}


if (!navigator.geolocation) {
  console.log("location is not supported")
}
navigator.geolocation.getCurrentPosition((position) => {
  console.log(`lat: ${position.coords.latitude}, lon" ${position.coords.longitude}`) 
})