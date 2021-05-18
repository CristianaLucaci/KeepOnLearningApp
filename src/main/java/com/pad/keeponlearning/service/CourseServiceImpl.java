package com.pad.keeponlearning.service;

import com.pad.keeponlearning.dao.OfferRepository;
import com.pad.keeponlearning.dao.UserRepository;
import com.pad.keeponlearning.dto.CourseResponse;
import com.pad.keeponlearning.dto.CourseSmt;
import com.pad.keeponlearning.dto.Register;
import com.pad.keeponlearning.dto.RegisterResponse;
import com.pad.keeponlearning.entity.Offer;
import com.pad.keeponlearning.entity.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
@Service
public class CourseServiceImpl implements CourseService{


    private OfferRepository offerRepository;

    public CourseServiceImpl(OfferRepository offerRepository){
        this.offerRepository=offerRepository;    }

    @Override
    @Transactional
    public CourseResponse add_course(CourseSmt c) {
        Offer offer;
        offer = c.getOffer();
        offerRepository.save(offer);
        return new CourseResponse("2");
    }


}
