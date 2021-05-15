package com.pad.keeponlearning.controller;

import com.pad.keeponlearning.dto.Register;
import com.pad.keeponlearning.dto.RegisterResponse;
import com.pad.keeponlearning.entity.User;
import com.pad.keeponlearning.service.RegisterService;
import com.pad.keeponlearning.dto.RegisterResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/register")
public class UserController {

    private RegisterService registerService;

    @Autowired
    public UserController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping("/registered")
    public RegisterResponse register(@RequestBody Register reg) {
       RegisterResponse registerResponse= registerService.register(reg);
       return registerResponse;
    }




}
