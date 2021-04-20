import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OfferService } from './services/offer.service'
import {Routes, RouterModule} from "@angular/router";
import { OfferCategoryMenuComponent } from './components/offer-category-menu/offer-category-menu.component';

const routes: Routes = [
  {path: 'offer_category/:id', component: OfferListComponent},
  {path: 'offer_category', component: OfferListComponent},
  {path: 'offer_category', component: OfferListComponent},
  {path: '', redirectTo: '/offer_category',pathMatch: 'full'},
  {path: '**', redirectTo: '/offer_category',pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    OfferCategoryMenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
