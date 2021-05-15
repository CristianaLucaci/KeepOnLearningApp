package com.pad.keeponlearning.service;

import com.pad.keeponlearning.dto.Register;
import com.pad.keeponlearning.dto.RegisterResponse;
import com.pad.keeponlearning.entity.User;

public interface RegisterService {
    RegisterResponse register(Register reg);
}
