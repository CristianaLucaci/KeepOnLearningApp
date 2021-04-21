import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/common/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})

export class OfferDetailsComponent implements OnInit {

  offer: Offer = new Offer();

  constructor(private offerService: OfferService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theOfferId: number = +this.route.snapshot.paramMap.get('id');

    this.offerService.getOffer(theOfferId).subscribe(
      data => {
        this.offer = data;
      }
    )
  }


}
