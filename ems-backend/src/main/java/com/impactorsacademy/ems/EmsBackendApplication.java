package com.impactorsacademy.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.lang.NonNull;

@SpringBootApplication
public class EmsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsBackendApplication.class, args);
	}

	@Bean 
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			public void addCorsMappings(@NonNull CorsRegistry registry){
				registry.addMapping("/api/**")
						.allowedOrigins("*")
						.allowedMethods("GET","POST","PUT","DELETE","OPTIONS")
						.allowedHeaders("*");
			}
		
		};
	}
}

