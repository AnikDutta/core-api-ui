package com.rci.mobileapplication.topic;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicController {
	
	@Autowired
	private TopicService topicservice;
	
	@RequestMapping("/topics")
	public List<Topic> getAllTopics() {
		return topicservice.getAllTopics();
	}
	
	@RequestMapping("/topics/{id}")
	public Optional<Topic> getTopic(@PathVariable String id) {
		return topicservice.getTopic(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/topics")
	public void addTopic(@RequestBody List<Topic> topics) {
		topicservice.addTopic(topics);
	}

	@RequestMapping(method=RequestMethod.PUT, value = "/topics")
	public void updateTopic(@RequestBody Topic topic) {
		topicservice.updateTopic(topic);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value = "/topics/{id}")
	public void deleteTopic(@PathVariable String id) {
		topicservice.deleteTopic(id);
	}

}
