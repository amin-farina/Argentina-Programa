import { Component, OnInit } from '@angular/core';
import {Cuentas} from "../../Cuentas";
import {CUENTAS} from "../../mock-cuentas";
import {CuentasService} from "../../service/cuentas.service"


@Component({
  selector: 'app-vacs',
  templateUrl: './vacs.component.html',
  styleUrls: ['./vacs.component.css']
})
export class VacsComponent implements OnInit {
  cuentas: Cuentas[] = CUENTAS;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
