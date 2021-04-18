package com.pad.keeponlearning.keeponlearning.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class FunRestController {
    //expose a '/' that return "Hello World"
    @GetMapping("/")
    public String sayHello(){
        return "Hello world! Time on server is " + LocalDateTime.now();
    }

    //expose a new endpoint for "workout"
    @GetMapping("/workout")
    public String getDailyWorkout(){
        return "Run a hard 5k!";
    }

    @GetMapping("/fortune")
    public String getDailyFortune(){
        return "Today is your lucky day!";
    }
}
