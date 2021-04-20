package com.pad.keeponlearning.dao;

import com.pad.keeponlearning.entity.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface OfferRepository extends JpaRepository<Offer, Long> {

}
