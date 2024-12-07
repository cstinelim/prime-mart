import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from '../services/lists.service';
import { CartService } from '../services/cart.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: 'category.page.html',
  styleUrls: ['category.page.scss'],
})
export class CategoryPage {
  totalPrice: number = 0;
  quantity: number = 1;
  public categories?: any;
  searchTerm: string = '';
  searchSubject: Subject<string> = new Subject<string>();
  filteredProducts: any[] = [];
  public bgColorHeader: string = 'bgColor';
  public searchbarStyle: string = 'searchbarStyle';
  public iconPositionHeader: string = 'iconPositionHeader';
  public labelPositionHeader: string = 'labelPositionHeader';
  public cardLabelStyle: string = 'cardLabelStyle';
  public cardStyle: string = 'cardStyle';
  public cardHeaderStyle: string = 'cardHeaderStyle';
  public cardImageStyle: string = 'cardImageStyle';
  public cardContentStyle: string = 'cardContentStyle';
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

  constructor(
    private _router: Router,
    private list: ListsService,
    private cartService: CartService
  ) {
    this.categories = this.list.getList;
  }

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;
        this.filterProducts();
      });

    this.cartService.totalPrice$.subscribe((price) => {
      this.totalPrice = price;
    });
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value;
    this.searchSubject.next(searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredProducts = [];
  }

  filterProducts() {
    if (this.searchTerm.trim() === '') {
      this.filteredProducts = [];
    } else {
      this.filteredProducts = [];
      const lowercasedSearchTerm = this.searchTerm.toLowerCase().trim();
      this.categories.forEach((category: { subcategories: any[] }) => {
        category.subcategories.forEach((subcategory: { products: any[] }) => {
          subcategory.products.forEach((product: { name: string }) => {
            const productName = product.name.toLowerCase();
            const productWords = productName.split(' ');
            const matchesSearchTerm = productWords.some((word: string) =>
              word.startsWith(lowercasedSearchTerm)
            );
            if (matchesSearchTerm) {
              if (!this.filteredProducts.includes(product)) {
                this.filteredProducts.push(product);
              }
            }
          });
        });
      });
    }
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

  public view(subcategoryTo: any) {
    this._router.navigate(['/subcategory'], {
      queryParams: {
        name: subcategoryTo.name,
        subcategories: JSON.stringify(subcategoryTo.subcategories),
      },
    });
  }
}
