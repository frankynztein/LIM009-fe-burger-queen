import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-info',
  templateUrl: './buyer-info.component.html',
  styleUrls: ['./buyer-info.component.css']
})
export class BuyerInfoComponent implements OnInit {

  buyername:string = '';
  
  makeOrder() {
    console.log(this.buyername)
  }

  constructor() { }

  ngOnInit() {
  }

}
