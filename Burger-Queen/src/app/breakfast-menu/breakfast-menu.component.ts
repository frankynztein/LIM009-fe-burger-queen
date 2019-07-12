import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-breakfast-menu',
  templateUrl: './breakfast-menu.component.html',
  styleUrls: ['./breakfast-menu.component.css']
})
export class BreakfastMenuComponent implements OnInit {

  itemsBreakfastMenu = [];

 
  
  constructor(private menuService: MenuService) {
    this.menuService.getItems().subscribe(itemsB => this.itemsBreakfastMenu = itemsB)
   }

  ngOnInit() {
    
  }

}
