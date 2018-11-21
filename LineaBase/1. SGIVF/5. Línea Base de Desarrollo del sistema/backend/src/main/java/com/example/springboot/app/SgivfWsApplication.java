package com.example.springboot.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SgivfWsApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(SgivfWsApplication.class, args);
	}
}
