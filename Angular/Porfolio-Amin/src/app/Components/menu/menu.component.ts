import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; /* El mismo genera la ruta especifica /menu/:id*/

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  ngOnInit(): void {
  }

}
