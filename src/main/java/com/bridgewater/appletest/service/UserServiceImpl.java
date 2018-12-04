package com.bridgewater.appletest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bridgewater.appletest.dao.UserDAO;
import com.bridgewater.appletest.model.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;

	@Override
	public void saveOrUpdate(User user) {
		System.out.println("In User Service");

		userDAO.saveOrUpdate(user);
	}

}