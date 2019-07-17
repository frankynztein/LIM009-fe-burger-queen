import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable(
  {
  providedIn: 'root'
}
)
export class OrdersService {
  arrProduct = [{name: 'pollo', quantity:1}];
  filteredArrProduct = [];
  
  // arrProductUnique = Array.from(new Set(this.arrProduct));  
  

  private ordersSource = new BehaviorSubject([]);
  currentOrders = this.ordersSource.asObservable();

  // constructor() { }

  addProduct(product) {
    this.filteredArrProduct = this.arrProduct.filter(elem => {
      console.log('elem',elem)
      console.log('elem .name', elem.name);
      console.log('product name', product.name);
      
      
      return elem.name !== product.name
    })
    console.log('filkteres', this.filteredArrProduct);
    
    if(this.arrProduct.length > this.filteredArrProduct.length) {
      for (let i = 0; i < this.arrProduct.length; i++) {
        if(this.arrProduct[i].name === product.name) {
          this.arrProduct[i]['quantity'] = this.arrProduct[i]['quantity'] + 1;
        } else {
            this.arrProduct.push(product);
        }
      }
    }
    
    this.ordersSource.next(this.arrProduct);

  
    
    
  }
}
