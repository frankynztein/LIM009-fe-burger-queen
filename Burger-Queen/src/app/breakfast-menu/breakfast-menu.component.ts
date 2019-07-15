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

  addItemToMenuService() {
    // let objItemToMenuService = {name: this.itemsBreakfastMenu['name'], 'price':
    // }
    
  }

  constructor(private menuService: MenuService) {
    this.menuService.getItemsBreakfast().subscribe(itemsB => {
      this.itemsBreakfastMenu = itemsB
    })
  }

  ngOnInit() { }

}
