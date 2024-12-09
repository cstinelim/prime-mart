import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  order: any = null;
  orderId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private cartService: CartService
  ) {}

  ngOnInit() {
    const orderId = this.route.snapshot.paramMap.get('id');

    if (orderId) {
      this.orderId = orderId;
      this.fetchOrderDetails(orderId);
    } else {
      console.error('No order ID found!');
    }
  }

  fetchOrderDetails(orderId: string): void {
    const orders = this.cartService.getOrders();

    if (orders && orders.length > 0) {
      const foundOrder = orders.find((order) => order.id === orderId);

      if (foundOrder) {
        this.order = foundOrder;
      } else {
        console.error('Order not found!');
      }
    } else {
      console.error('No orders available!');
    }
  }

  cancelOrder(): void {
    if (this.order) {
      this.cartService.removeOrder(this.order.id); // Call removeOrder from CartService
      console.log(`Order ${this.order.id} has been cancelled.`);
      this.router.navigate(['/orders']); // Navigate back to orders page
    }
  }
}
