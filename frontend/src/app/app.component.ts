import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'king-size';

  
  // change this variable to "log-in" and change header etc etc
  auth = true;

  loggedIn = false;

  constructor () {
    
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
