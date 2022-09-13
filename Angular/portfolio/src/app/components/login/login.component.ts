import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';
import { LoginuserService } from 'src/app/service/loginuser.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User= new User();

  constructor(private loginuserservice: LoginuserService) {
  }

  ngOnInit(): void {
  }

  userLogin(){
    // console.log(this.user);
     this.loginuserservice.loginUser(this.user).subscribe(data=>{
         window.location.href="/vacs"
       },error => alert("Por favor ingrese un usuario y contraseña correcto")
   );

  }

}
