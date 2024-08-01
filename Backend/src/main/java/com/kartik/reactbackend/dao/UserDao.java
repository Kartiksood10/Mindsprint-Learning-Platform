package com.kartik.reactbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kartik.reactbackend.pojo.User;


@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	User findByUserid(String userid);
}
