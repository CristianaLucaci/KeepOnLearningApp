package com.pad.keeponlearning.dto;

import com.pad.keeponlearning.entity.Participant;
import lombok.Data;

@Data
public class ParticipantSmt {
    Participant participant;
    public Participant getParticipant() {
        return this.participant;
    }
}
