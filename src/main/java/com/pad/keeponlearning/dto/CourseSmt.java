package com.pad.keeponlearning.dto;

import com.pad.keeponlearning.entity.Offer;
import lombok.Data;

@Data
public class CourseSmt {
    private Offer offer;

    public Offer getOffer() {
        return offer;
    }
}
