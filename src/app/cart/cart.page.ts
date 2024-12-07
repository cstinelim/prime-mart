import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

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

  constructor(private cartService: CartService) {}

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
}
