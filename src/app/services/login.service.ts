import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class LoginService {

  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };
  private POST_LOGIN_URL='http://localhost:8081/POSApplication/employees'
  private GET_LOGOUT_URL='http://localhost:8081/POSApplication/employees/logout?cashdrawerid='

  constructor(private http:HttpClient) { }

  login(emp) {
    return this.http.post(this.POST_LOGIN_URL, emp.toString(), this.httpOptions)
  }

  logout(cashDrawerId){
    return this.http.get(this.GET_LOGOUT_URL+cashDrawerId,this.httpOptions)
  }


}
