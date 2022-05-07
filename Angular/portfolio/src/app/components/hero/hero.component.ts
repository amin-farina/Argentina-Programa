import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  colorFondo: string = "rgb(118, 68, 233)";

  constructor() { }

  ngOnInit(): void {
  }

}
