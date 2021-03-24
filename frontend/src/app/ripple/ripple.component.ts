import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 0;
  color: string = '';
}
