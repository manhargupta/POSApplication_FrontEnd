import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CartService {
  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  private GET_CUSTOMERCART_URL='http://localhost:8081/POSApplication/carts/customer/'
  private DELETE_CUSTOMERCART_URL='http://localhost:8081/POSApplication/carts/empty/'
  private GET_CUSTOMERSEARCH_URL='http://localhost:8081/POSApplication/customer?search='

  constructor(private http:HttpClient) { }

  getCustomerCart(custId:number){
    return this.http.get(this.GET_CUSTOMERCART_URL+custId,this.httpOptions)
  }

  removeProductFromCart(pId,custId){
    let url = `http://localhost:8081/POSApplication/carts/customer/${custId}/product/${pId}`;
    return this.http.delete(url,this.httpOptions)
  }

  incProductQuantity(pId,custId){
    let url = `http://localhost:8081/POSApplication/carts/customer/${custId}/product/${pId}/inc`;
    return this.http.put(url,this.httpOptions)
  }

  decProductQuantity(pId,custId){
    let url = `http://localhost:8081/POSApplication/carts/customer/${custId}/product/${pId}/dec`;
    return this.http.put(url,this.httpOptions)
  }

  deleteCustomerCart(custId){
    return this.http.delete(this.DELETE_CUSTOMERCART_URL+custId,this.httpOptions)

  }

  getCustomerSearch(searchData){
    return this.http.get(this.GET_CUSTOMERSEARCH_URL+searchData,this.httpOptions)
  }



}
