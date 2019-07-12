import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuBreakfastCollection: AngularFirestoreCollection<Item>
  itemsB: Observable<Item[]>
  itemsL: Observable<Item[]>

  constructor(public angularfs: AngularFirestore) { 
    // this.itemsB = this.angularfs.collection('menuBreakfast').valueChanges();
    // this.itemsL = this.angularfs.collection('menuLunch').valueChanges();
    this.itemsB = this.angularfs.collection('menuBreakfast').snapshotChanges().pipe(map(changes => {
      return changes.map(b => {
        const dataB = b.payload.doc.data() as Item
        dataB.id = b.payload.doc.id;
        return dataB;
      });
    }));
    this.itemsL = this.angularfs.collection('menuLunch').snapshotChanges().pipe(map(changes => {
      return changes.map(l => {
        const dataL = l.payload.doc.data() as Item
        dataL.id = l.payload.doc.id;
        return dataL;
      });
    }));
    
  }

  getItemsB() {
    return this.itemsB;
  }

  getItemsL() {
    return this.itemsL;
  }
}


