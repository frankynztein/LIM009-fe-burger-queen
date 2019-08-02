import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showBreakfast: boolean = true;
  showLunch: boolean = false;

  constructor( ) { }

  ngOnInit() { }

  openBreakfastMenu() {
    this.showBreakfast = true;
    this.showLunch = false;
  }

  openLunchMenu() {
    this.showLunch = true;
    this.showBreakfast = false;
  }

}
