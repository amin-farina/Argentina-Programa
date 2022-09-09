/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.miaplicacion.primerproyecto.Controller;

import com.miaplicacion.primerproyecto.model.Persona;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author amin-notebook
 */


@RestController
public class holaController {
        
        List<Persona> listaPersona = new ArrayList();
    
         @GetMapping ("/hola/{nombre}")
        public String decirHolaNombre( @PathVariable String nombre){
            return "Hello World  " + nombre;
        }

        @GetMapping  ("/hola")
        public String decirHolaPersonalizado (@RequestParam String nombre2){
                return "Hello World " + nombre2;
        }
        
        @PostMapping ("nueva/persona")
        public void agregarPersona( @RequestBody Persona pers){
            listaPersona.add(pers);
            
            /*Aviso por consola de la nueva persona, impriendo los datos*/
            System.out.println("Nueva persona -> Nombre: " + pers.getNombre() + " Apellido: " + pers.getApellido());
            
        }

        
        @GetMapping ("/ver/personas")
        @ResponseBody
        public List<Persona> verPersona(){
            return listaPersona;
        }
        
        @RequestMapping("/api/v1.0")
        public class TimeController {

            @GetMapping("/time")
            @ResponseStatus(HttpStatus.OK)
            public String getCurrentTime() {

                return Instant.now().toString();
            }
        }
  
}
