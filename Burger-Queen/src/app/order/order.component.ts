import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { MenuService } from '../services/menu.service';
import { DataService } from '../data.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  finalOrder: any;
  emptyArray: any;
  totalOrder: any;
  show = true;
  totalProducto: number;
  buyerName: string;
  dataPedidos = [];
  numeroDePedidos: number;
  todasOrders = [];
  fecha = new Date()
  h = this.fecha.getHours();
  m = this.fecha.getMinutes();
  s = this.fecha.getSeconds();
  
  interval= setInterval(() => {this.s++; if (this.s > 59) {this.s = 0; this.m++}
    else if (this.m > 59) {
      this.m = 0;
      this.h++;
    } }, 1000);

  constructor(private dataOrder: OrdersService, private menuService: MenuService, private dataName: DataService) {
    this.registrarNumeroDeOrden();
    this.interval
  }

  eliminar(index:any) {
    this.dataOrder.eliminarProducto(index); // la funcion(ingresa el id)
  }

  ngOnInit() {
    this.dataOrder.currentOrders.subscribe(arrOrder => {
      this.finalOrder = arrOrder;
    })

    this.dataOrder.totalPedidos.subscribe((total: number) => {
      this.totalProducto = total;
    }) // TRABAJANDO CON EL PRECIO TOTAL

    this.dataName.currentBuyerName.subscribe(buyerName => this.buyerName = buyerName)
  }

  registrarNumeroDeOrden() {
    this.menuService.getDataNumeroDePedidos().subscribe(dataPedidos => {
      this.numeroDePedidos = dataPedidos.length + 1;
    })
  }
  
  sendOrder() {
    this.menuService.sendOrderToKitchen({
      numberOrders: this.numeroDePedidos,
      clientName: this.buyerName,
      products: this.finalOrder,
      time:  Date.now(),
      status: 'Pendiente',
      timeIntervalPR:'',
      total: this.totalProducto
    }).then(elem => this.dataOrder.resetOrder());
    this.buyerName="";
    this.totalProducto=0
    this.orderAlert()
    // Swal.fire({
    //   position: 'center',
    //   type: 'success',
    //   title: 'La orden fue enviada',
    //   showConfirmButton: false,
    //   timer: 2000
    // })
  }

  addNewQuantity(index, cantidadModificada){
    this.dataOrder.acumuladorDePedidos(index, cantidadModificada)
  }

  orderAlert() {
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'La orden fue enviada',
      showConfirmButton: false,
      timer: 2000
    })
  }
}