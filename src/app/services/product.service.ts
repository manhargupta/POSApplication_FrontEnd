import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IProducts} from "../models/models";
import {DataService} from "./data.service";

@Injectable()
export class ProductService {
  token:string
  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  private GET_PRODUCTS_URL='http://localhost:8081/POSApplication/products'
  private POST_ADDPRODUCTSTOCART_URL='http://localhost:8081/POSApplication/carts'
  private GET_PRODUCTSEARCH_URL='http://localhost:8081/POSApplication/products/search?search='

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.GET_PRODUCTS_URL,this.httpOptions)
  }

  getProductSearch(searchData){
    return this.http.get(this.GET_PRODUCTSEARCH_URL+searchData,this.httpOptions)
  }

  addToCart(body){
    return this.http.post(this.POST_ADDPRODUCTSTOCART_URL,body.toString(),this.httpOptions)
  }


}
