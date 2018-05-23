package com.rci.mobileapplication.course;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {
	
	@Autowired
	private CourseService courseservice;
	
	@RequestMapping("/topics/{topicid}/courses")
	public List<Course> getAllCourses(@PathVariable String topicid) {
		return courseservice.getAllCourses(topicid);
	}
	@RequestMapping("/courses")
	public List<Course> getAllCourseData() {
		return courseservice.getAllCourseData();
	}
	@RequestMapping("/topics/{topicid}/courses/{id}")
	public Optional<Course> getCourse(@PathVariable String id) {
		return courseservice.getCourse(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/topics/{topicid}/courses")
	public void addCourse(@RequestBody List<Course> courses, @PathVariable String topicid) {
		courseservice.addCourse(courses, topicid);
	}

	@RequestMapping(method=RequestMethod.PUT, value = "/topics/{topicid}/courses")
	public void updateTopic(@RequestBody Course course) {
		courseservice.updateTopic(course);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value = "/topics/{topicid}/courses/{id}")
	public void deleteTopic(@PathVariable String id) {
		courseservice.deleteTopic(id);
	}

}
