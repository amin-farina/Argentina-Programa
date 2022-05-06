import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required, Validators.email]],
      username:['',[Validators.required, Validators.minLength(5),Validators.maxLength(12)]]
    })

  }

  get Password(){
    return this.form.get("password");
  }

  get Email(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get EmailValid() {
    return false
  }

  validacion: boolean=false;

  onEnviar(event: Event){
    event.preventDefault;

    if(this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // Tambien podriamos ejecutar alguna logica extra
      this.validacion = true;
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
  ngOnInit(): void {
  }

}
