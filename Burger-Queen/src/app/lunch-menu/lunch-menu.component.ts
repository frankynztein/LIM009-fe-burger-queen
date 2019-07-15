import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-lunch-menu',
  templateUrl: './lunch-menu.component.html',
  styleUrls: ['./lunch-menu.component.css']
})
export class LunchMenuComponent implements OnInit {

  hamburguesas: Item[];
  bebidas: Item[];
  acompanamientos: Item[];
  adicionales: Item[];

  constructor(private menuService: MenuService)  { 
    this.menuService.getItemsLunch().subscribe(itemsL => {
      this.hamburguesas = itemsL.filter((ele:any) => ele.category ==='Hamburguesas' )
      this.adicionales = itemsL.filter((ele:any) => ele.category ==='Adicionales' )
      this.bebidas = itemsL.filter((ele:any) => ele.category ==='Bebidas' )
      this.acompanamientos = itemsL.filter((ele:any) => ele.category ==='Acompañamientos' )
    })
  }

  // itemsLunchMenu: Item[];
  // constructor(private menuService: MenuService) { 
  //   this.menuService.getItemsLunch().subscribe(itemsL => {
  //     this.itemsLunchMenu = itemsL
  //   })
  // }



  ngOnInit() { }

}
