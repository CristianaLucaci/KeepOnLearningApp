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

    return this.httpClient.get<GetResponseOffers>(searchUrl).pipe(
      map(response => response._embedded.offers)
    );
  }

  getOfferCategories(): Observable<OfferCategory[]> {
    return this.httpClient.get<GetResponseOfferCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.offerCategory)
    );
  }
}

interface GetResponseOffers{
  _embedded: {
    offers: Offer[];
  }
}

interface GetResponseOfferCategory{
  _embedded: {
    offerCategory: OfferCategory[];
  }
}
