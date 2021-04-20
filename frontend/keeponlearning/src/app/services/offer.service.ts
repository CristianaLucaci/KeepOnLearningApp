import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../common/offer';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OfferService {


  private baseUrl = 'http://localhost:8081/api/offers';

  constructor(private httpClient: HttpClient) { }

  getOfferList(): Observable<Offer[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.offers)
    );
  }
}

interface GetResponse{
  _embedded: {
    offers: Offer[];
  }
}