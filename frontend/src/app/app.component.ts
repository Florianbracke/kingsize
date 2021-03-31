import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'king-size';

  route: string;
  // change this variable to "log-in" and change header etc etc
  auth =false ;

  loggedIn = false;

  constructor (location: Location, router: Router) {

    router.events.subscribe(val => {

      if (location.path() != "") {

        this.route = location.path();
        
        console.log(this.route);

      } else {

        console.log(this.route);
     
      }

    });

  }
  
  ngOnInit() {
    
      if (this.auth === true) {

        this.loggedIn = true;

        console.log('sd')

        console.log(this.auth)
        
        console.log(this.loggedIn)
      }
        
  }

}
