import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vac',
  templateUrl: './add-vac.component.html',
  styleUrls: ['./add-vac.component.css']
})
export class AddVacComponent implements OnInit {

  cuenta: string = "";
  dia: number = 0;
  hora: string = "";
  vac: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
