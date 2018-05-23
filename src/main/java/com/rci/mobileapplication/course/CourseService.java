package com.rci.mobileapplication.course;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rci.mobileapplication.topic.Topic;

@Service
public class CourseService {
	@Autowired
	private CourseRepository courseRepository;
	public List<Course> getAllCourses(String topicid){
		List<Course> courses = new ArrayList<>();
		courseRepository.findByTopicId(topicid).forEach(courses::add);
		return courses;
	}
	
	public void addCourse(List<Course> courses, String topicid) {
		courses.forEach(course->{
				course.setTopic(new Topic(topicid, "", ""));
				courseRepository.save(course);
			});
	}
	
	public void updateTopic(Course course) {
		courseRepository.save(course);
	}

	public void deleteTopic(String id) {
		courseRepository.deleteById(id);
		
	}

	public Optional<Course> getCourse(String id) {
		return courseRepository.findById(id);
	}

	public List<Course> getAllCourseData() {
		List<Course> courses = new ArrayList<>();
		courseRepository.findAll().forEach(courses::add);
		return courses;
	}
}
