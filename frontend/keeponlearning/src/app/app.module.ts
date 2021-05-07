import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OfferService } from './services/offer.service'
import {Routes, RouterModule} from "@angular/router";
import { OfferCategoryMenuComponent } from './components/offer-category-menu/offer-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';



const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'search/:keyword', component: OfferListComponent},
  {path: 'offer_category/:id', component: OfferListComponent},
  {path: 'offer_category', component: OfferListComponent},
  {path: 'offers', component: OfferListComponent},
  {path: 'offers/:id', component: OfferDetailsComponent},
  {path: '', redirectTo: '/offers',pathMatch: 'full'},
  {path: '**', redirectTo: '/offers',pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    OfferCategoryMenuComponent,
    SearchComponent,
    OfferDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
