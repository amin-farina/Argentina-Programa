/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.aminfarina.Portfolio.repo;

import com.aminfarina.Portfolio.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author amin-notebook
 */

@Repository
public interface UserRepo extends JpaRepository<User, String>{
    User findByUserId(String userId);
}
