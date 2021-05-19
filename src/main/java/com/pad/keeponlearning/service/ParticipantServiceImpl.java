package com.pad.keeponlearning.service;

import com.pad.keeponlearning.dao.ParticipantRepository;
import com.pad.keeponlearning.dto.ParticipantResponse;
import com.pad.keeponlearning.dto.ParticipantSmt;
import com.pad.keeponlearning.entity.Participant;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class ParticipantServiceImpl implements ParticipantService{
    private ParticipantRepository participantRepository;

    public ParticipantServiceImpl(ParticipantRepository participantRepository){
        this.participantRepository=participantRepository;    }

    @Override
    @Transactional
    public ParticipantResponse add_participant(ParticipantSmt p) {
        Participant participant;
        participant = p.getParticipant();
        participantRepository.save(participant);
        return new ParticipantResponse("2");
    }
}
