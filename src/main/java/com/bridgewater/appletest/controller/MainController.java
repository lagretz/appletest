package com.bridgewater.appletest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bridgewater.appletest.dao.UserDAO;
import com.bridgewater.appletest.model.User;

@Controller
public class MainController {

	@Autowired
	private UserDAO userDAO;

	@RequestMapping("/")
	public String index() {
		return "static/index";
	}
}