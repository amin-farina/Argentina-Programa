/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.SpringBoot.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;




@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;
    private String apellido;
    
    
    public Persona() {
    }
    
    public Persona( Long id, String nombre, String apellido){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
