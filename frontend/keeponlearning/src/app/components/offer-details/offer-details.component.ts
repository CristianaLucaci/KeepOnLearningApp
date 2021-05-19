import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Offer } from 'src/app/common/offer';
import { CartService } from 'src/app/services/cart.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})

export class OfferDetailsComponent implements OnInit {

  offer: Offer = new Offer();

  constructor(private offerService: OfferService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private router:Router) { }

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

  addToCourses() {
    console.log(`Added ${this.offer.name}`);
    const theCartItem = new CartItem(this.offer);
    this.cartService.addToCourses(theCartItem);
  }


  showParticipants() {
    this.router.navigateByUrl(`/participants-list/${this.offer.id}`);
  }
}
