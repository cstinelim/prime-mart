import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private orders: any[] = [];
  private totalPriceSubject = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPriceSubject.asObservable();

  constructor() {}

  // Add item to cart
  addToCart(item: any) {
    this.cartItems.push(item);
    this.updateTotalPrice();
  }

  // Remove item from cart by index
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateTotalPrice();
  }

  // Get all cart items
  getCartItems() {
    return this.cartItems;
  }

  // Clear the cart
  clearCart() {
    this.cartItems = [];
    this.updateTotalPrice();
  }

  // Add order
  addOrder(order: any) {
    this.orders.push(order);
  }

  // Get all orders
  getOrders() {
    return this.orders;
  }

  // Calculate the total price
  private updateTotalPrice() {
    const total = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.totalPriceSubject.next(total);
  }

  removeOrder(orderId: string): void {
  const index = this.orders.findIndex((order) => order.id === orderId);
  if (index !== -1) {
    this.orders.splice(index, 1); // Remove the order from the array
    console.log(`Order ${orderId} has been removed.`);
  } else {
    console.error(`Order with ID ${orderId} not found.`);
  }
}

}
