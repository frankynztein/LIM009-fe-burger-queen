import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuBreakfastCollection: AngularFirestoreCollection<Item>
  items: Observable<Item[]>
  itemsL: Observable<Item[]>

  constructor(public angularfs: AngularFirestore) { 
    this.items = this.angularfs.collection('menuBreakfast').valueChanges();
    this.itemsL = this.angularfs.collection('menuLunch').valueChanges();
  }

  getItems() {
    return this.items;
  }

  getItemsL() {
    return this.itemsL;
  }
}


