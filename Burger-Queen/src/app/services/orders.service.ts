import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class OrdersService {
  arrProduct = [];
  filteredArrProduct:any;  

  private ordersSource = new BehaviorSubject([]);
  currentOrders = this.ordersSource.asObservable();

  // constructor() { }

  addProduct(product) {
    if(this.arrProduct.length === 0) {
      this.arrProduct.push(product);      
    } else {
      this.filteredArrProduct = this.arrProduct.filter(elem => {
        // console.log('elem', elem);
        return elem.name !== product.name;
      });    
      if (this.arrProduct.length > this.filteredArrProduct.length) {
        for (let i = 0; i < this.arrProduct.length; i++) {
          if(this.arrProduct[i].name === product.name) {
            this.arrProduct[i]['quantity'] = this.arrProduct[i]['quantity'] + 1;
          };
        };
      } else {
          this.arrProduct.push(product);
      }; 
    };
    // console.log(this.arrProduct);    
    this.ordersSource.next(this.arrProduct);
  }
}
