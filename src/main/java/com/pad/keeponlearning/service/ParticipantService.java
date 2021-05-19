package com.pad.keeponlearning.service;


import com.pad.keeponlearning.dto.ParticipantResponse;
import com.pad.keeponlearning.dto.ParticipantSmt;

public interface ParticipantService {
    ParticipantResponse add_participant(ParticipantSmt p);
}
