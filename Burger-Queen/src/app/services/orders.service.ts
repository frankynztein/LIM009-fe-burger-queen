import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable(
  {
  providedIn: 'root'
}
)
export class OrdersService {
  arrProduct = [];
  
  // arrProductUnique = Array.from(new Set(this.arrProduct));  
  

  private ordersSource = new BehaviorSubject([]);
  currentOrders = this.ordersSource.asObservable();

  // constructor() { }

  addProduct(product) {
    this.arrProduct.push(product);
    this.ordersSource.next(this.arrProduct); 
    // this.arrProduct.forEach(function(element){
    //   console.log(product);
      
    // })

    // for (let i = 0; i < this.arrProduct.length; i++) {
    // }
    // console.log('array unicos', this.arrProductUnique);
    
    // console.log(this.arrProduct);
    
  }
}
