import { Component, OnInit } from '@angular/core';
import {OfferService} from "../../services/offer.service";
import {OfferCategory} from "../../common/offer-category";

@Component({
  selector: 'app-offer-category-menu',
  templateUrl: './offer-category-menu.component.html',
  styleUrls: ['./offer-category-menu.component.css']
})
export class OfferCategoryMenuComponent implements OnInit {
  offerCategories: OfferCategory[];
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.listOfferCategories();
  }
  listOfferCategories(){
    this.offerService.getOfferCategories().subscribe(
    data => {
      console.log('Offer Categories=' + JSON.stringify(data));
      this.offerCategories=data;
    }
    );
  }

}
