package com.pad.keeponlearning.config;

import com.pad.keeponlearning.entity.Offer;
import com.pad.keeponlearning.entity.OfferCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {


    private EntityManager entityManager;

    @Autowired
    public MyDataRestConfig(EntityManager theEntityManager){
        entityManager=theEntityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        //disable HTTP methods for Offer: PUT,POST and DELETE
        config.getExposureConfiguration()
                .forDomainType(Offer.class)
                .withItemExposure((metdata, httpMethods)->httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods)->httpMethods.disable(theUnsupportedActions));

        //disable HTTP methods for OfferCategory: PUT,POST and DELETE
        config.getExposureConfiguration()
                .forDomainType(OfferCategory.class)
                .withItemExposure((metdata, httpMethods)->httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods)->httpMethods.disable(theUnsupportedActions));
        //call an internal helper method
        exposeIds(config);
    }

    private void exposeIds(RepositoryRestConfiguration config) {
        //expose entity ids
        //get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        //create an array of the entity types
        List<Class> entityClasses=new ArrayList<>();
        //get th entity types from the entities
        for(EntityType tempEntityType : entities){
            entityClasses.add(tempEntityType.getJavaType());

            Class[] domainTypes = entityClasses.toArray(new Class[0]);
            config.exposeIdsFor(domainTypes);
        }
    }
}
