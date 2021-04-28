import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalCourses: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCourses(theCartItem: CartItem){
    //check if we already have the item in our cart
    let alreadyExtistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0) {
      //find the intem in the cart based on item id

      for(let tempCartItem of this.cartItems){
        if(tempCartItem.id === theCartItem.id){
          existingCartItem = tempCartItem;
          break;
        }
      }
    
    //check if we found it
    alreadyExtistsInCart = (existingCartItem != undefined);
    }

    if(alreadyExtistsInCart) {
      console.log("Already enrolled");
    }
    else{
      //add item to array
      this.cartItems.push(theCartItem);
    }

    //compute total quantity
    this.computeCartTotals();
    }
    
  computeCartTotals() {
    let totalQuantityValue: number = 0;
    
    for(let currentCartItem of this.cartItems){
      totalQuantityValue += currentCartItem.quantity;
    }
    this.totalQuantity.next(totalQuantityValue);

    
  }
  }

