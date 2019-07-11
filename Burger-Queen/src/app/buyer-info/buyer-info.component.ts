import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buyer-info',
  templateUrl: './buyer-info.component.html',
  styleUrls: ['./buyer-info.component.css']
})
export class BuyerInfoComponent implements OnInit {

  buyerName:string = '';

  constructor(private data: DataService) { }
  
  takeOrder() {
    console.log(this.buyerName);
    this.data.changeBuyerName(this.buyerName)
  }
  
  ngOnInit() {
    this.data.currentBuyerName.subscribe(buyerName => this.buyerName = buyerName)
  }
  

}
