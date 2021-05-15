package com.pad.keeponlearning.service;

import com.pad.keeponlearning.dao.UserRepository;
import com.pad.keeponlearning.dto.Register;
import com.pad.keeponlearning.dto.RegisterResponse;
import com.pad.keeponlearning.entity.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class RegisterServiceImpl implements RegisterService{

    private UserRepository userRepository;

    public RegisterServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;    }

    @Override
    @Transactional
    public RegisterResponse register(Register reg) {
        User user;
        user = reg.getUser();
        userRepository.save(user);
        return new RegisterResponse("2");
    }
}
