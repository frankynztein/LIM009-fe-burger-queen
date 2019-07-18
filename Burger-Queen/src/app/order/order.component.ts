import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  finalOrder:any;
  emptyArray:any;
  totalOrder:any;

  // addPrices = (array) => { //TRABAJANDO CON EL PRECIO TOTAL
  //   for (let i = 0; i < this.finalOrder.length; i++) {
  //     let priceQuantity = this.finalOrder[i].price * this.finalOrder[i].quantity;
  //     this.finalOrder.push(priceQuantity)
  //   }
  //     this.totalOrder = this.finalOrder.reduce((a, b) => {
  //       return a + b
  //     })
  // }

  addPrices = (array) => { // TRABAJANDO CON EL PRECIO TOTAL
    for (let i = 0; i < array.length; i++) {
      let priceQuantity = array[i].price * array[i].quantity;
      array.push(priceQuantity)
    }
      this.totalOrder = array.reduce((a, b) => {
        return a + b
      })
  }

  constructor(private dataOrder: OrdersService) {
    // this.dataOrder.currentOrders.subscribe(arrOrder => {
    //   // console.log('Orden lista', arrOrder);
    //   this.finalOrder = arrOrder;
    //   // this.finalOrder = arrOrder;
    //   console.log('finalOrder', this.finalOrder);
      
    // })
   }

  ngOnInit() {
    this.dataOrder.currentOrders.subscribe(arrOrder => {
      // console.log('Orden lista', arrOrder);
      this.finalOrder = arrOrder;
      console.log('finalOrder', this.finalOrder);
    })

    console.log(this.addPrices(this.finalOrder)) // TRABAJANDO CON EL PRECIO TOTAL


  }

}
