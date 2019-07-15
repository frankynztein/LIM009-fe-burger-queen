import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class OrdersService {
  private ordersSource = new BehaviorSubject([]);
  currentOrders = this.ordersSource.asObservable();

  constructor() { }

  updateOrders(ORDERS:any) {
    this.ordersSource.next(ORDERS)
  }
}
