import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArrayType } from '@angular/compiler';
import { filter } from 'rxjs/operators';

@Injectable(
  {
  providedIn: 'root'
}
)
export class OrdersService {
  arrProduct = []
  private ordersSource = new BehaviorSubject([]);
  currentOrders = this.ordersSource.asObservable();
  filteredArrProduct : any
  
  addProduct(product) {
    if(this.arrProduct.length === 0){
       this.arrProduct.push(product);
    }else {

    this.filteredArrProduct = this.arrProduct.filter(elem => {
      console.log('elem .name', elem.name);
      console.log('product name', product.name);
      return elem.name !== product.name
    })
    console.log('filtered', this.filteredArrProduct);
    
    if(this.arrProduct.length > this.filteredArrProduct.length) {
      for (let i = 0; i < this.arrProduct.length; i++) {
        if(this.arrProduct[i].name === product.name) {
          this.arrProduct[i]['quantity'] = this.arrProduct[i]['quantity'] + 1;
        } 
        }
        }
        else {
            this.arrProduct.push(product);
        }
      }
       this.ordersSource.next(this.arrProduct);
    }   
  }
 
