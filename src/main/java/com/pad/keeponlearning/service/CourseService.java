package com.pad.keeponlearning.service;

import com.pad.keeponlearning.dto.CourseResponse;
import com.pad.keeponlearning.dto.CourseSmt;
import com.pad.keeponlearning.dto.Register;
import com.pad.keeponlearning.dto.RegisterResponse;

public interface CourseService {
    CourseResponse add_course(CourseSmt c);
}
