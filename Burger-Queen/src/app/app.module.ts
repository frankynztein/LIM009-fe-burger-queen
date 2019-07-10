import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerInfoComponent } from './buyer-info/buyer-info.component';
import { TakeOrderComponent } from './take-order/take-order.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerInfoComponent,
    TakeOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
