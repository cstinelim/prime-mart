import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: any[] = [];

  constructor(private cartService: CartService, private router: Router) {} // Inject Router

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orders = this.cartService.getOrders();
  }

  viewOrderDetails(order: any) {
    console.log('View details for order:', order);
    this.router.navigate(['/order-details', order.id]); // Navigate to OrderDetailsPage
  }
}
