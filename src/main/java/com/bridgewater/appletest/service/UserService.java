package com.bridgewater.appletest.service;

import org.springframework.stereotype.Service;

import com.bridgewater.appletest.model.User;

@Service
public interface UserService {

	public void saveOrUpdate(User user);

}
