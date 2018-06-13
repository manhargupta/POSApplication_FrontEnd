import { Injectable } from '@angular/core';
import {ICartItems, ICashDrawer, ICustomer, IOrder} from "../models/models";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<ICustomer>(null);
  private messageSource2 = new BehaviorSubject<ICartItems[]>(null);
  private messageSource3 = new BehaviorSubject<number>(null);
  private messageSource4 = new BehaviorSubject<IOrder>(null);
  private messageSource5 = new BehaviorSubject<ICashDrawer[]>(null);
  private messageSource6 = new BehaviorSubject<string>(null);

  searchedCustomer = this.messageSource.asObservable();
  cart = this.messageSource2.asObservable();
  subTotal = this.messageSource3.asObservable();
  selectedOrder = this.messageSource4.asObservable();
  selectedCashDrawer= this.messageSource5.asObservable();
  orderId= this.messageSource6.asObservable();
  constructor() { }

  changeCustomer(searchedCustomer: ICustomer) {
    this.messageSource.next(searchedCustomer)
  }
  changeCart(cart: ICartItems[]) {
    this.messageSource2.next(cart)
  }
  changeSubTotal(subTotal: number) {
    this.messageSource3.next(subTotal)
  }
  changeSelectedOrder(selectedOrder: IOrder) {
    this.messageSource4.next(selectedOrder)
  }
  changeSelectedCashDrawer(selectedCashDrawer: ICashDrawer[]) {
    this.messageSource5.next(selectedCashDrawer)
  }
  changeorderId(orderId: string) {
    this.messageSource6.next(orderId)
  }





}
