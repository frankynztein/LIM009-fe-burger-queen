import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-lunch-menu',
  templateUrl: './lunch-menu.component.html',
  styleUrls: ['./lunch-menu.component.css']
})
export class LunchMenuComponent implements OnInit {
  itemsLunchMenu: Item[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getItemsL().subscribe(itemsL => this.itemsLunchMenu = itemsL)
  }

}
