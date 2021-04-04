import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'king-size';

  route: string;

  constructor ( location: Location, router: Router) {

    router.events.subscribe(value => {

      this.route = location.path();

    });

  }
  
  ngOnInit() {

  }

}
