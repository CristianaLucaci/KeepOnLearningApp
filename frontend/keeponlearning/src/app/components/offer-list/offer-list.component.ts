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

  offers: Offer[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  //new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword: string = null;

  constructor(private offerService: OfferService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listOffers();
    });
  }

  listOffers(){
    this.searchMode=this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleSearchOffers();
    }
    else
    this.handleListOffers();

  }

  handleListOffers(){
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

  //check if we have a different category than previous
  //if we have a different category id than previous then set thePageNumber to 1

  if(this.previousCategoryId != this.currentCategoryId ){
    this.thePageNumber = 1;
  }

  this.previousCategoryId = this.currentCategoryId;

    //get the offers for the given category id
    this.offerService.getOfferListPaginate(this.thePageNumber - 1, 
                                          this.thePageSize,
                                          this.currentCategoryId)
                                          .subscribe(this.processResult());

      }

      processResult() {
        return data => {
          this.offers = data._embedded.offers;
          this.thePageNumber = data.page.number + 1;
          this.thePageSize = data.page.size;
          this.theTotalElements = data.page.totalElements;
        };
      }
  
      updatePageSize(pageSize: number){
        this.thePageSize=pageSize;
        this.thePageNumber=1;
        this.listOffers();
      }

  private handleSearchOffers() {
    const theKeyword: string = this.route.snapshot.
    paramMap.get('keyword');

    //if we have a different keyword than previous
    //then set thePageNumber to 1
    
    if(this.previousKeyword!=theKeyword){
      this.thePageNumber=1;
    }

    this.previousKeyword=theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    //search for offers using keyword
    this.offerService.searchOffersPaginate(this.thePageNumber-1,
      this.thePageSize,
      theKeyword
    ).subscribe(this.processResult());
  }

  
}
