/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.SpringBoot.Controller;

import com.example.SpringBoot.model.Persona;
import com.example.SpringBoot.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {

         @Autowired
         private IPersonaService persoServ;
                 
                 
         @PostMapping("/new/persona")   
          public void agregarPersona (@RequestBody Persona pers) {
            persoServ.crearPersona(pers);
          }
          
         @GetMapping ("/ver/personas")
         @ResponseBody
          public List<Persona> verPersonas() {
              return persoServ.verPersona();
          }
          
          @DeleteMapping ("/delete/{id}")
          public void borrarPersona(@PathVariable Long id) {
              persoServ.borrarPersona(id);
          }
}
