import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { MenuService } from './services/menu.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerInfoComponent } from './buyer-info/buyer-info.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { MenuComponent } from './menu/menu.component';
import { BreakfastMenuComponent } from './breakfast-menu/breakfast-menu.component';
import { LunchMenuComponent } from './lunch-menu/lunch-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerInfoComponent,
    TakeOrderComponent,
    MenuComponent,
    BreakfastMenuComponent,
    LunchMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Burger-Queen'),
    AngularFirestoreModule
  ],
  providers: [
    DataService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
