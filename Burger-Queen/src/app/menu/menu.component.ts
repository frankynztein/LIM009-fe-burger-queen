import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENU } from '../mock-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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
  }

}
