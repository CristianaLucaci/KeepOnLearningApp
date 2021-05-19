package com.pad.keeponlearning.controller;

import com.pad.keeponlearning.dto.ParticipantResponse;
import com.pad.keeponlearning.dto.ParticipantSmt;
import com.pad.keeponlearning.dto.Register;
import com.pad.keeponlearning.dto.RegisterResponse;
import com.pad.keeponlearning.service.ParticipantService;
import com.pad.keeponlearning.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/particip")
public class ParticipantController {

    private ParticipantService participantService;

    @Autowired
    public ParticipantController(ParticipantService participantService) {
        this.participantService = participantService;
    }

    @PostMapping("/response")
    public ParticipantResponse add_participant(@RequestBody ParticipantSmt p) {
        ParticipantResponse participantResponse= participantService.add_participant(p);
        return participantResponse;
    }

}
