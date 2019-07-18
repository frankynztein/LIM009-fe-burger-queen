import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  {
  providedIn: 'root'
}
)
export class DataService {

  private buyerNameSource = new BehaviorSubject('');
  currentBuyerName = this.buyerNameSource.asObservable();

  constructor() { }

  changeBuyerName(buyerName: string) {
    this.buyerNameSource.next(buyerName)
    
  }
}
