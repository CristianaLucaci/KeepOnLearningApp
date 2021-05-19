import {NgModule} from '@angular/core';
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
import { LogindetailsComponent } from './components/logindetails/logindetails.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterdetailsComponent } from './components/registerdetails/registerdetails.component';
import { ParticipantsListComponent } from './components/participants-list/participants-list.component';
import { CourseComponent } from './components/course/course.component';
import { CourseStatusComponent } from './components/course-status/course-status.component';



const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'checkout/:id', component: CheckoutComponent},
  {path: 'course', component: CourseComponent},
  {path: 'course-status', component: CourseStatusComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'search/:keyword', component: OfferListComponent},
  {path: 'offer_category/:id', component: OfferListComponent},
  {path: 'offer_category', component: OfferListComponent},
  {path: 'offers', component: OfferListComponent},
  {path: 'offers/:id', component: OfferDetailsComponent},
  {path: 'logindetails', component: LogindetailsComponent},
  {path: 'registerdetails', component: RegisterdetailsComponent},
  {path: 'participants-list', component: ParticipantsListComponent},
  {path: 'participants-list/:id', component: ParticipantsListComponent},
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
    LogindetailsComponent,
    RegisterComponent,
    RegisterdetailsComponent,
    ParticipantsListComponent,
    CourseComponent,
    CourseStatusComponent,
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
