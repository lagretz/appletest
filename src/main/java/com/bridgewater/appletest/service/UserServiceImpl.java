package com.bridgewater.appletest.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.bridgewater.appletest.dao.UserDAO;
import com.bridgewater.appletest.model.User;

public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;

	@Override
	public void saveOrUpdate(User user) {
		userDAO.saveOrUpdate(user);
	}

}