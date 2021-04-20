import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/common/offer';
import { OfferService } from 'src/app/services/offer.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-offer-list',

  templateUrl: './offer-list-grid.component.html',

  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offers: Offer[];
  currentCategoryId: number;

  constructor(private offerService: OfferService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listOffers();
    });
  }

  listOffers(){

      //check if id parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      //get the id param string. convert string to a number using the "+" symbol
      this.currentCategoryId= +this.route.snapshot.paramMap.get('id');
    }
    else {
      //no category id available
      this.currentCategoryId=1;
    }
      //get the offers for the given category id
    this.offerService.getOfferList(this.currentCategoryId).subscribe(
      data => {
        this.offers = data;
      }
    )
  }
}
