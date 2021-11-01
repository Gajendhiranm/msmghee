import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrdersComponent } from './main/navbar/orders/orders.component';
@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  public cartOrders;
  public list = new Subject();
  orderList$ = this.list.asObservable()
  constructor() { }
  setOrder(orders){
    this.list.next(orders)
     this.cartOrders = orders;
  }


 cartList(){
   return this.cartOrders;
 }


}
