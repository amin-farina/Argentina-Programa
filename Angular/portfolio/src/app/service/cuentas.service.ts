import { Injectable } from '@angular/core';
import {Cuentas} from "../Cuentas";
import {CUENTAS} from "../mock-cuentas";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  private apiUrl = 'http://localhost:5001/cuentas';

  constructor(
    private http: HttpClient
  ) { }

  getCuenta():Observable<Cuentas[]> {
    return this.http.get<Cuentas[]>(this.apiUrl)
  }
}
