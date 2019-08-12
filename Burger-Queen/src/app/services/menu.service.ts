import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../models/Item';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private totalOrders= new BehaviorSubject('');
  listOrders= this.totalOrders.asObservable();
  
  updateOrderReadyToServer(order) {
    return this.angularfs
        .collection("orders")
        .doc(order)
        .update({ status: 'Listo para servir'});
  }
 updateDelivery(order) {
  return this.angularfs
      .collection("orders")
      .doc(order)
      .update({ status: 'Entregado'});
  }

  constructor(private angularfs: AngularFirestore) { }

  getItemsBreakfast() {
    console.log('angularfs', this.angularfs);
    
    return this.angularfs.collection('menuBreakfast', ref => ref.orderBy('name', 'asc')).snapshotChanges()
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
    return this.angularfs.collection('menuLunch', ref => ref.orderBy('name', 'asc')).snapshotChanges()
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

  getTotalOrders() {
    return this.angularfs.collection('orders', ref => ref.orderBy('time', 'asc')).snapshotChanges()
    .pipe(
      map(response => {
        return response.map(element => {
            const id = element.payload.doc.id;
            const data = element.payload.doc.data()
            return {id, ...data}
        })
      })
    )
  }

  timeInterval(order, objTimeInterval) {
    this.angularfs.collection("orders").doc(order.id).update(objTimeInterval)
  }
}