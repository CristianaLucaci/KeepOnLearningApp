import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../common/offer';
import { map } from 'rxjs/operators'
import {OfferCategory} from "../common/offer-category";

@Injectable({
  providedIn: 'root'
})
export class OfferService {


  private baseUrl = 'http://localhost:8081/api/offers';
  private categoryUrl = 'http://localhost:8081/api/offer-category'

  constructor(private httpClient: HttpClient) { }

  getOfferList(theCategoryId: number): Observable<Offer[]>{
  //build URL based on category id
    const searchUrl=`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getOffers(searchUrl);
  }

  getOfferListPaginate(thePage: number, 
                       thePageSize: number, 
                       theCategoryId: number): Observable<GetResponseOffers> {
                         
      const searchUrl=`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                       + `&page=${thePage}&size=${thePageSize}`;
      
      return this.httpClient.get<GetResponseOffers>(searchUrl);
    }

  getOfferCategories(): Observable<OfferCategory[]> {
    return this.httpClient.get<GetResponseOfferCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.offerCategory)
    );
  }

  getOffer(theOfferId: number): Observable<Offer>{
    const offerUrl = `${this.baseUrl}/${theOfferId}`;
    return this.httpClient.get<Offer>(offerUrl);
  }

  searchOffers(theKeyword: string): Observable<Offer[]> {
    //build URL based on keyword
    const searchUrl=`${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getOffers(searchUrl);
  }

  private getOffers(searchUrl: string) {
    return this.httpClient.get<GetResponseOffers>(searchUrl).pipe(
      map(response => response._embedded.offers)
    );
  }
}

interface GetResponseOffers{
  _embedded: {
    offers: Offer[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseOfferCategory{
  _embedded: {
    offerCategory: OfferCategory[];
  }
}
