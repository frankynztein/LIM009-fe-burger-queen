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
  show = true
  hola = "hola"
  totalProducto: number;
     
  
  deleteProducto(id){
    this.finalOrder.filter(objArrOrden => {
      console.log(objArrOrden.id !== id);
      });
    }
 
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
      this.emptyArray.push(priceQuantity)
    }
      this.totalOrder = this.emptyArray.reduce((a, b) => {
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

      this.dataOrder.totalPedidos.subscribe((total:number) => {
        this.totalProducto = total;
        console.log('totalProducto', this.totalProducto);
      })// TRABAJANDO CON EL PRECIO TOTAL


  }

}


