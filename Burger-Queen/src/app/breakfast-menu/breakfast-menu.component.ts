import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-breakfast-menu',
  templateUrl: './breakfast-menu.component.html',
  styleUrls: ['./breakfast-menu.component.css']
})
export class BreakfastMenuComponent implements OnInit {
  itemsBreakfastMenu: Item[];
  itemBreakfast:string;

  addItemToMenuService(itemBreakfastID) {
    for (let i = 0; i < this.itemsBreakfastMenu.length; i++) {
      if (this.itemsBreakfastMenu[i].id === itemBreakfastID) {
        let objItem = {
          name: this.itemsBreakfastMenu[i].name,
          price: this.itemsBreakfastMenu[i].price,
          quantity: 1}
      return objItem
      }
    }  
  }

  constructor(private menuService: MenuService) {
    this.menuService.getItemsBreakfast().subscribe(itemsB => {
      this.itemsBreakfastMenu = itemsB
    })
  }

  ngOnInit() {
   }

}
