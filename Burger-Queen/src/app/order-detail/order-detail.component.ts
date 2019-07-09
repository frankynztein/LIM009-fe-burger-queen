import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
  }

}
