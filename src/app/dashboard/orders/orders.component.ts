import {Component, Input, OnInit} from '@angular/core';
import {IOrder} from "../../models/models";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  selectedOrder:IOrder

  constructor() {
    this.selectedOrder=null
  }

  ngOnInit() {
  }


}
