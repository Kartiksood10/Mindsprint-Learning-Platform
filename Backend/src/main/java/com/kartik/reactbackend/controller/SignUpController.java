package com.kartik.reactbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kartik.reactbackend.pojo.User;
import com.kartik.reactbackend.service.CreateUserService;
import com.kartik.reactbackend.service.ValidateLoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class SignUpController {

	@Autowired
	private CreateUserService createUserService;
	
	@Autowired
	private ValidateLoginService validateLoginService;
	
	@PostMapping("/signUp")
	public ResponseEntity<String> saveUser(@RequestBody User user) {
		          
		      User savedUser = createUserService.saveUser(user);
		      System.out.println("Created New User :: "+ savedUser);
		
		 if (savedUser!= null) {
			   System.out.println("User Created :: "+ savedUser);
	            return new ResponseEntity<>("Signup successful", HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>("Signup failed", HttpStatus.UNAUTHORIZED);
	        }
		
	}
	
	@PostMapping("/logIn")
	public ResponseEntity<String> login(@RequestBody User user) {
		
		User validateLogin = validateLoginService.validateLogin(user);
		
		if(validateLogin !=null && validateLogin.getPassword().equals(user.getPassword())) {
			System.out.println("Login Successful ::"+ user.getUserid());
			return new ResponseEntity<String>("Login Successful", HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("Login Fail,", HttpStatus.UNAUTHORIZED);
		}
		
	}
}
