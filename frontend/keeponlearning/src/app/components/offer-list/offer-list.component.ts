import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/common/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-list',
  //templateUrl: './offer-list-table.component.html',
  templateUrl: './offer-list-table.component.html',

  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offers: Offer[];

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.listOffers();
  }

  listOffers(){
    this.offerService.getOfferList().subscribe(
      data => {
        this.offers = data;
      }
    )
  }
}
