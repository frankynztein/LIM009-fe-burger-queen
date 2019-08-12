import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../models/Item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private angularfs: AngularFirestore) { }

  getItemsBreakfast() {
    console.log('angularfs', this.angularfs);
    
    return this.angularfs.collection('menuBreakfast').snapshotChanges()
    .pipe(
      map(response => {
        const arr: Item[] = [];
        response.forEach(function(element){
          const data = element.payload.doc.data() as Item;
          arr.push({
            id: element.payload.doc.id,
            name: data.name,
            price: data.price,
            image: data.image
          })
        })
        return arr;
      })
    );
  }

  getItemsLunch() {
    return this.angularfs.collection('menuLunch').snapshotChanges()
    .pipe(
      map(changes => {
      return changes.map(l => {
        const dataL = l.payload.doc.data() as Item
        dataL.id = l.payload.doc.id;        
        return dataL;
      });
    }));
  }

  sendOrderToKitchen(objArray) {
    const orderCollection = this.angularfs.collection('orders');
    return orderCollection.add(objArray)
  }

  getDataNumeroDePedidos(){
    return this.angularfs.collection('orders').valueChanges();
   }
}