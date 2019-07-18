import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // ORDERS:any = [];

  constructor(private dataOrder: OrdersService) { }

  ngOnInit() {
    this.dataOrder.currentOrders.subscribe(function(arrOrder){
      console.log('Orden lista', arrOrder);
      // this.ORDERS = arrOrder;
    })
  }

}
