package com.kartik.reactbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kartik.reactbackend.dao.UserDao;
import com.kartik.reactbackend.pojo.User;

@Service
public class CreateUserService {

	@Autowired
	private UserDao userDao;
	
	public User saveUser(User user) {
		
		User details = userDao.save(user);
		
		return details;
		
	}

//	public void makeAdmin(Long id) {
//		User found= UserDao.findById(id).orElse(null);
//		if(found!=null){
//			found.setRole(true);
//			UserDao.save(found);
//		}
//	}
}
