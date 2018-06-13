import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {Router} from "@angular/router";
import {IOrder} from "../../../models/models";
import {DataService} from "../../../services/data.service";
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders:any[]
  selectedOrder:IOrder
  orderSearchbutton:number=0
  osearch:string
  isActive:number
  constructor(private orderService:OrderService,private router: Router, private ds:DataService) {
    this.orders=[]
  }

  ngOnInit() {
    this.getOrdersList()
  }

  getOrdersList(){
    this.orderService.getOrdersList()
      .subscribe((data:any)=>{
          this.orders=data.orders
        },
        error=>{
          swal("Error", error.error.errorMessage);
          if(error.error.errorMessage=='Please Login First!'){
            this.router.navigateByUrl('/');
          }
        }
      )
  }

  selectOrder(orderId, orderDate){
    this.isActive=orderId
    this.selectedOrder= this.orders[orderDate].filter((order)=>{
      return order.order.orderId==orderId
    })
    this.ds.changeSelectedOrder(this.selectedOrder)
  }
  displaySearchOrder(){
    this.orderSearchbutton=1
  }
}
