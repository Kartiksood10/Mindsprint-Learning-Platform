package com.kartik.reactbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.kartik.reactbackend.pojo.CourseDetails;
import com.kartik.reactbackend.service.CourseService;

@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {
	
	@Autowired
	private CourseService courseService;

	@PostMapping("/addCourse")
	public ResponseEntity<String> addCourse(@RequestBody CourseDetails courseDetails) {
		       
		CourseDetails addedCourse = courseService.addCourse(courseDetails);
		           
		
		if(addedCourse != null) {
		   System.out.println("Course Created :: " + addedCourse );
            return new ResponseEntity<>("Course Addition successful", HttpStatus.OK);
        } 
		else {
			System.out.println("Something went wrong");
            return new ResponseEntity<>("Course Addition failed", HttpStatus.NOT_ACCEPTABLE);
        }
       }
	
	@GetMapping("/getAll")
	  public ResponseEntity<List<CourseDetails>> getallCourses() {
	    List<CourseDetails> allCourseDetails = courseService.getAllCourseDetails();
	    if (allCourseDetails.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } else {
	        return new ResponseEntity<>(allCourseDetails, HttpStatus.OK);
	    }
       }

	   @PutMapping("/updateCourse/{id}")
		public ResponseEntity<CourseDetails> updateCourse(@RequestBody CourseDetails courseDetails, @PathVariable int id){

			CourseDetails updatedCourse = courseService.updateCourse(courseDetails,id);
			return new ResponseEntity<>(updatedCourse, HttpStatus.OK);

	   }

		@DeleteMapping("/deleteCourse/{id}")
		public Object deleteById(@PathVariable int id){

			if(courseService.deleteCourse(id)){

				return "Course deleted";
			}
			else{

				return "Data not found";
			}
		}

}
