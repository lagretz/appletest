package com.bridgewater.appletest.dao;

import java.util.List;

import javax.sql.DataSource;

import com.bridgewater.appletest.model.User;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImpl implements UserDAO {

	private JdbcTemplate jdbcTemplate;

	public UserDAOImpl(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public void saveOrUpdate(User user) {
		String SQL = "insert into User (id, name) values (?, ?)";
		jdbcTemplate.update(SQL, 1, user.getName());
		return;
	}

	@Override
	public void delete(int userId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public User get(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> list() {
		// TODO Auto-generated method stub
		return null;
	}
}
