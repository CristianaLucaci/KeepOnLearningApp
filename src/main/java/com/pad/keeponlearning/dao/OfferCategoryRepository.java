package com.pad.keeponlearning.dao;

import com.pad.keeponlearning.entity.OfferCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "offerCategory", path = "offer-category")
public interface OfferCategoryRepository extends JpaRepository<OfferCategory, Long> {
}
