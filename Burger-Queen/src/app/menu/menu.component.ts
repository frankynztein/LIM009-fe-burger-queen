import { Component, OnInit } from '@angular/core';
// import { MenuService } from '../services/menu.service';
// import { Item } from '../models/Item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // hideB:boolean = true;
  // hideL:boolean = true;

  // getBreakfastMenu() {
  //   this.menuService.getItemsB().subscribe(itemsB => this.itemsBreakfastMenu = itemsB)
  // }

  // getLunchMenu() {
  //   this.menuService.getItemsL().subscribe(itemsL => this.itemsLunchMenu = itemsL)
  // }

  constructor( ) { }

  ngOnInit() { }

  // openBreakfastMenu() {
  //   this.hideB = !this.hideB;
  // }

  // openLunchMenu() {
  //   this.hideL = !this.hideL;
  // }

}
