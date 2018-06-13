import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseContentType} from "@angular/http";

@Injectable()
export class ReportService {

  httpOptions = {
    withCredentials: true,
    responseType: 'text',
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };


  constructor(private http: HttpClient) {
  }

  genrateReport(startDate, endDate) {
    let GET_REPORT_URL = `http://localhost:8081/POSApplication/reports?startDate=${startDate}&endDate=${endDate}`
    return this.http.get(GET_REPORT_URL, {'withCredentials': true, responseType: 'blob'})
  }
}
