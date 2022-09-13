import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from 'src/app/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseUrl = 'http://localhost:8080/user/login'; //Esto es la API

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
}
