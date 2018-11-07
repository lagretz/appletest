package com.bridgewater.appletest.dao;

import java.util.List;

import com.bridgewater.appletest.model.User;

public interface UserDAO {

	public void saveOrUpdate(User user);

	public void delete(int userId);
	
	public User get(int userId);
	
	public List<User> list();
}