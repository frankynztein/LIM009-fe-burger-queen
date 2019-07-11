import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itemsBreakfastMenu;
  itemsLunchMenu;

  getBreakfastMenu() {
    this.menuService.getItems().subscribe(itemsB => this.itemsBreakfastMenu = itemsB)
  }

  getLunchMenu() {
    this.menuService.getItemsL().subscribe(itemsL => this.itemsLunchMenu = itemsL)
  }

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    
  }

}
