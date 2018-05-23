package com.rci.mobileapplication.usecamel;

import org.apache.camel.ProducerTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CamelController {
	
	@Autowired
	ProducerTemplate producertemplate;
	
	@RequestMapping("/camel")
	public void startCamel() {
		producertemplate.sendBody("direct:firstRoute","Calling Via spring boot rest controller");
	}

}
