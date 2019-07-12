import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Menu } from '../menu';
import { MENU } from '../mock-menu';
=======
// import { MenuService } from '../services/menu.service';
// import { Item } from '../models/Item';
>>>>>>> 207099c8890ec530abfab74faef4b298dffa6785

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
<<<<<<< HEAD
  menu = MENU;
  selectedMenu: Menu;

  // menu: Menu = {
  //   name: 'Hamburguesa',
  //   price: 5
  // }

  constructor() { }

  ngOnInit() {
  }

  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
=======
  hideB:boolean = true;
  hideL:boolean = true;

  // getBreakfastMenu() {
  //   this.menuService.getItemsB().subscribe(itemsB => this.itemsBreakfastMenu = itemsB)
  // }

  // getLunchMenu() {
  //   this.menuService.getItemsL().subscribe(itemsL => this.itemsLunchMenu = itemsL)
  // }

  constructor( ) { }

  ngOnInit() { }

  openBreakfastMenu() {
    this.hideB = !this.hideB;
  }

  openLunchMenu() {
    this.hideL = !this.hideL;
>>>>>>> 207099c8890ec530abfab74faef4b298dffa6785
  }

}
