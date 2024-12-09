import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  isEditMode: boolean = false;
  public bgColorHeader: string = 'bgColor';
  public headerTitle: string = 'headerTitle';
  public productCardStyle: string = 'productCardStyle';
  public productCartContentStyle: string = 'productCartContentStyle';
  public productCartImageStyle: string = 'productCartImageStyle';
  public productDetailsStyle: string = 'productDetailsStyle';
  public productCartNameStyle: string = 'productCartNameStyle';
  public productPriceStyle: string = 'productPriceStyle';
  public productQuantityStyle: string = 'productQuantityStyle';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.loadCartItems();
    this.cartService.totalPrice$.subscribe((total) => {
      this.totalPrice = total;
    });
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.loadCartItems();
  }

  checkOut() {
    if (this.cartItems.length === 0) {
      console.log('Cart is empty.');
      return;
    }

    const newOrder = {
      id: `ORD-${Date.now()}`,
      items: [...this.cartItems],
      status: 'Pending',
      date: new Date().toISOString(),
      totalPrice: this.totalPrice,
    };

    this.cartService.addOrder(newOrder); // Add order to the service
    this.cartService.clearCart(); // Clear the cart after checkout
    this.router.navigate(['/orders']); // Navigate to the orders page
  }
}
