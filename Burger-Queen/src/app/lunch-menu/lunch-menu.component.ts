import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { element } from 'protractor';
@Component({
  selector: 'app-lunch-menu',
  templateUrl: './lunch-menu.component.html',
  styleUrls: ['./lunch-menu.component.css']
})
export class LunchMenuComponent implements OnInit {
  hamburguesas = [];
  bebidas = [];
  acompanamientos  = [];
  adicionales = []
  constructor(private menuService: MenuService)  { 
    this.menuService.getItemsL().subscribe(itemsL => {
      this.hamburguesas = itemsL.filter((ele:any) => ele.category ==='Hamburguesas' )
      this.adicionales = itemsL.filter((ele:any) => ele.category ==='Adicionales' )
      this.bebidas = itemsL.filter((ele:any) => ele.category ==='Bebidas' )
      this.acompanamientos = itemsL.filter((ele:any) => ele.category ==='Acompañamientos' )
    })
  }

  ngOnInit() {
  }

}
