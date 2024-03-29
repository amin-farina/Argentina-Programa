package com.aminfarina.Portfolio.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Table(name="loginUser")
@AllArgsConstructor
@Data
@NoArgsConstructor

public class User {
        @Id
        private String userId;
        private String password;
        
        
        public String getUserId(){
            return userId;
        }
        
        public String getPassword(){
            return password;
        }
}
