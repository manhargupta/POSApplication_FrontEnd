import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {IOrder} from "../../../models/models";

@Component({
  selector: 'app-saved-orders-list',
  templateUrl: './saved-orders-list.component.html',
  styleUrls: ['./saved-orders-list.component.css']
})
export class SavedOrdersListComponent implements OnInit {
  orders:any[]
  selectedOrder:IOrder
  orderSearchbutton:number=0
  isActive:number
  osearch:string

  constructor(private orderService:OrderService,private router: Router, private ds:DataService) {
    this.orders=[]
  }

  ngOnInit() {
    this.getOrdersList()
  }

  getOrdersList(){
    this.orderService.getSavedOrdersList()
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
