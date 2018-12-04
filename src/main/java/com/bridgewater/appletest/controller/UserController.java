package com.bridgewater.appletest.controller;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bridgewater.appletest.model.User;
import com.bridgewater.appletest.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/users/insert/{name}/{lastName}/{email}/{password}",method = RequestMethod.POST,headers="Accept=application/json")
	  public boolean addTask(@PathVariable String name,@PathVariable String lastName, @PathVariable String email,
			  @PathVariable String password) throws ParseException { 
		User userNew = new User(name, lastName, email, password); 
		System.out.println("In User Controller");
		userService.saveOrUpdate(userNew); 
		return true;
	}
}
