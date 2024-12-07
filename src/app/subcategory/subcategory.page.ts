import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
  totalPrice: number = 0;
  public allCategories?: any;
  public subcategories: any[] = [];
  public bgColorHeader: string = 'bgColor';
  public headerTitle: string = 'headerTitle';
  public iconPositionHeader: string = 'iconPositionHeader';
  public labelPositionHeader: string = 'labelPositionHeader';
  public cardLabelStyle: string = 'cardLabelStyle';
  public cardStyle: string = 'cardStyle';
  public cardHeaderStyle: string = 'cardHeaderStyle';
  public cardImageStyle: string = 'cardImageStyle';
  public cardContentStyle: string = 'cardContentStyle';

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private cartService: CartService
  ) {
    this._ar.queryParams.subscribe((categoryNa) => {
      this.allCategories = { name: categoryNa['name'] };
      this.subcategories = categoryNa['subcategories']
        ? JSON.parse(categoryNa['subcategories'])
        : [];
    });
  }

  ngOnInit() {
    this.cartService.totalPrice$.subscribe((price) => {
      this.totalPrice = price;
    });
  }

  public view(subcategoryTo: any) {
    this._router.navigate(['/product'], {
      queryParams: {
        name: subcategoryTo.name,
        products: JSON.stringify(subcategoryTo.products || []),
      },
    });
  }
}
