import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {

  buyerName:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentBuyerName.subscribe(buyerName => this.buyerName = buyerName)
    
  }

}
