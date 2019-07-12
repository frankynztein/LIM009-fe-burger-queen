import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { BuyerInfoComponent } from './buyer-info/buyer-info.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import {BreakfastMenuComponent} from './breakfast-menu/breakfast-menu.component';
import {LunchMenuComponent} from './lunch-menu/lunch-menu.component'

const routes: Routes = [
  {
    path: '',
    component: BuyerInfoComponent
  },
  {
    path: 'take-order',
    component: TakeOrderComponent
  },
  {
    path: 'take-order/Breakfast',
    component: BreakfastMenuComponent
  },
  {
    path: 'take-order/Lunch',
    component: LunchMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
