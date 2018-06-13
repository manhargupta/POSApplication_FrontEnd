import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class OrderService {
  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  private POST_ORDER_URL = 'http://localhost:8081/POSApplication/orders'
  private GET_ORDER_URL = 'http://localhost:8081/POSApplication/orders'
  private GET_SAVED_ORDER_URL = 'http://localhost:8081/POSApplication/orders/savedorder'

  constructor(private http: HttpClient) {
  }

  addOrder(order){
    return this.http.post(this.POST_ORDER_URL,order.toString(),this.httpOptions)
  }

  getOrdersList(){
    return this.http.get(this.GET_ORDER_URL,this.httpOptions)
  }
  getSavedOrdersList(){
    return this.http.get(this.GET_SAVED_ORDER_URL,this.httpOptions)

  }
  reloadOrder(orderId){
    let url = `http://localhost:8081/POSApplication/orders/savedorder/${orderId}/reload`
    return this.http.get(url,this.httpOptions)
  }
}
