import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CashDrawerService {
  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  private GET_CASH_DRAWER_URL = 'http://localhost:8081/POSApplication/cashdrawer'

  constructor(private http: HttpClient) {
  }

  getCashDrawer(){
    return this.http.get(this.GET_CASH_DRAWER_URL,this.httpOptions)
  }
}
