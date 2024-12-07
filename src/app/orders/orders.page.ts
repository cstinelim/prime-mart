import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Order {
  id: string;
  items: string[];
  status: string;
  date: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss'],
})
export class OrdersPage {
  orders: Order[] = [
    {
      id: 'BSITC1',
      items: ['Apples', 'Bananas', 'Oranges'],
      status: 'Shipped',
      date: '2024-12-06',
    },
    {
      id: 'BSITC2',
      items: ['Tomatoes', 'Cucumbers'],
      status: 'Delivered',
      date: '2024-12-05',
    },
    {
      id: 'BSITC3',
      items: ['Milk', 'Bread'],
      status: 'Pending',
      date: '2024-12-04',
    },
  ];

  constructor(private router: Router) {}

  viewOrderDetails(order: Order): void {
    // Navigate to order details page and pass the order ID
    this.router.navigate(['/order-details', order.id]);
  }
}