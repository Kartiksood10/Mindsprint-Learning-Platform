package com.kartik.reactbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kartik.reactbackend.dao.CourseDao;
import com.kartik.reactbackend.pojo.CourseDetails;

@Service
public class CourseService {

	@Autowired
	private CourseDao courseDao;
	
	public CourseDetails addCourse(CourseDetails courseDetails) {
		
		CourseDetails createdCourse = courseDao.save(courseDetails);
		
		return createdCourse;
	}
	
	public List<CourseDetails> getAllCourseDetails() {
		
		List<CourseDetails> findAll = courseDao.findAll();
		
		return findAll;
	}

	public CourseDetails updateCourse(CourseDetails courseDetails,int id) {

		CourseDetails existingCourse = courseDao.findById(id).orElse(null);

		if (existingCourse != null) {
			// Update relevant fields (assuming not all fields need update)
			existingCourse.setCoursename(courseDetails.getCoursename());
			existingCourse.setUrl(courseDetails.getUrl());

			// Save the updated entity
			return courseDao.save(existingCourse);
		} else {
			// Throw an exception or handle the case where course doesn't exist
			throw new RuntimeException("Course with ID " + courseDetails.getId() + " not found");
		}
	}

	public boolean deleteCourse(int courseId) {
		// Check if course exists before deleting
		boolean exists = courseDao.existsById(courseId);

		if (exists) {
			courseDao.deleteById(courseId);
			return true;
		} else {
			// Optional: Log or handle the case where course doesn't exist
			System.out.println("Course with ID " + courseId + " not found for deletion");
			return false;
		}
	}
}
