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

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getItemsB().subscribe(itemsB => this.itemsBreakfastMenu = itemsB)
  }

}
