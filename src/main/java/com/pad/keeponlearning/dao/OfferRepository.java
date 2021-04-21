package com.pad.keeponlearning.dao;

import com.pad.keeponlearning.entity.Offer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface OfferRepository extends JpaRepository<Offer, Long> {
    Page<Offer> findByCategoryId(@RequestParam("id")Long id, Pageable pageable);
    Page<Offer> findByNameContaining(@RequestParam("name")String name, Pageable pageable);

}
