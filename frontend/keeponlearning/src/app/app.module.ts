import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OfferService } from './services/offer.service'

@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
