import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  [x: string]: any;
  private cartItems: any[] = [];
  private totalPriceSubject = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPriceSubject.asObservable();

  constructor() {}

  addToCart(item: any) {
    this.cartItems.push(item);
    this.updateTotalPrice();
  }

  private updateTotalPrice() {
    const total = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.totalPriceSubject.next(total);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateTotalPrice();
  }

  calculateTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + (item.price * item.quantity || '0'),
      0
    );
  }
}
