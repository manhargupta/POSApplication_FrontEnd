import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CustomerService {
  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  private GET_CUSTOMER_URL = 'http://localhost:8081/POSApplication/customer/'

  constructor(private http: HttpClient) {
  }

  getCustomer(custId: string) {
    return this.http.get(this.GET_CUSTOMER_URL + custId, this.httpOptions)
  }
}
