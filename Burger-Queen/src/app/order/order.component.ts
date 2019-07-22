import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { MenuService } from '../services/menu.service';
// import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  finalOrder:any;
  emptyArray:any;
  totalOrder:any;
  show = true;
  totalProducto: number;

  constructor(private dataOrder: OrdersService, private menuService: MenuService) { }
  
  eliminar(id: any){
    this.dataOrder.eliminarProducto(id); // la funcion(ingresa el id)
  }

  ngOnInit() {  
    this.dataOrder.currentOrders.subscribe(arrOrder => {
      // console.log('Orden lista', arrOrder);
      this.finalOrder = arrOrder;
      // console.log('finalOrder', this.finalOrder);
    })

      this.dataOrder.totalPedidos.subscribe((total:number) => {
        this.totalProducto = total;
        // console.log('totalProducto', this.totalProducto);
      }) // TRABAJANDO CON EL PRECIO TOTAL
  }

  sendOrder() {
    this.menuService.sendOrderToKitchen({
      id: 'qw',
      clientName: 'Judith',
      products: this.finalOrder,
      time: '5:00pm',
      status: 'Pendiente',
      total: 50
    });
  }
}
