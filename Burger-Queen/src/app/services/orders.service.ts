import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  {
  providedIn: 'root'
}
)
export class OrdersService {
  private ordersSource = new BehaviorSubject([]);
  currentOrders = this.ordersSource.asObservable();

  // constructor() { }

  addProduct(product) {    
    let arrProduct = [];
    arrProduct.push(product)
    this.ordersSource.next(arrProduct)
  }
}
