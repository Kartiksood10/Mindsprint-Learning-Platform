package com.kartik.reactbackend.pojo;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class CourseDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private int id;
	
	private String coursename;
	
	private String courseauthor;
	
	private String url;
	@ManyToMany(mappedBy = "courses")
	private Set<User> users=new HashSet<>();

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCoursename() {
		return coursename;
	}

	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}

	public String getCourseauthor() {
		return courseauthor;
	}

	public void setCourseauthor(String courseauthor) {
		this.courseauthor = courseauthor;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
