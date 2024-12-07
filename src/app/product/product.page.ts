import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  totalPrice: number = 0;
  quantity: number = 1;
  public allProducts?: any;
  public productList: any[] = [];
  public bgColorHeader: string = 'bgColor';
  public headerTitle: string = 'headerTitle';
  public iconPositionHeader: string = 'iconPositionHeader';
  public labelPositionHeader: string = 'labelPositionHeader';
  public cardImageStyle: string = 'cardImageStyle';
  public productCardStyle: string = 'productCardStyle';
  public productCartContentStyle: string = 'productCartContentStyle';
  public productCartImageStyle: string = 'productCartImageStyle';
  public productDetailsStyle: string = 'productDetailsStyle';
  public productCartNameStyle: string = 'productCartNameStyle';
  public productPriceStyle: string = 'productPriceStyle';
  public productQuantityStyle: string = 'productQuantityStyle';
  public quantityContainerStyle: string = 'quantityContainerStyle';
  public quantityButtonStyle: string = 'quantityButtonStyle';
  public quantityLabelStyle: string = 'quantityLabelStyle';

  constructor(private _ar: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    this._ar.queryParams.subscribe((subcategoryNa) => {
      this.allProducts = { name: subcategoryNa['name'] };
      this.productList = subcategoryNa['products']
        ? JSON.parse(subcategoryNa['products'])
        : [];
    });
    this.cartService.totalPrice$.subscribe((price) => {
      this.totalPrice = price;
    });
  }

  increaseQuantity(product: any) {
    product.quantity += 1;
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity -= 1;
    }
  }

  addToCart(product: any) {
    const productWithQuantity = { ...product, quantity: product.quantity };
    productWithQuantity.totalPrice = product.price * product.quantity;
    this.cartService.addToCart(productWithQuantity);
    product.quantity = 1;
  }
}
