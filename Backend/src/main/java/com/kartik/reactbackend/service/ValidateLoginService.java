package com.kartik.reactbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kartik.reactbackend.dao.UserDao;
import com.kartik.reactbackend.pojo.User;

@Service
public class ValidateLoginService {

	@Autowired
	private UserDao userDao;
	
	public User validateLogin(User user) {
		User findByUserid = userDao.findByUserid(user.getUserid());
		return findByUserid;
		
	}

	public void makeAdmin(int id) {
		User found=userDao.findById(id).orElse(null);
		if(found!=null){
			found.setRole(true);
			userDao.save(found);
		}
	}
}
