package com.pad.keeponlearning.controller;

import com.pad.keeponlearning.dto.CourseResponse;
import com.pad.keeponlearning.dto.CourseSmt;
import com.pad.keeponlearning.dto.Register;
import com.pad.keeponlearning.dto.RegisterResponse;
import com.pad.keeponlearning.service.CourseService;
import com.pad.keeponlearning.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/a")
public class CourseController {

    private CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/b")
    public CourseResponse add_course(@RequestBody CourseSmt c) {
        CourseResponse courseResponse= courseService.add_course(c);
        return courseResponse;
    }



}
