package com.rci.mobileapplication;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HelloController {
	
	@RequestMapping(value= {"/","/messages","/profile"})
	public String home() {
		return "home";
	}
	
	@RequestMapping("/implicit/callback")
	public String homeCallback() {
		return "home";
	}
}
