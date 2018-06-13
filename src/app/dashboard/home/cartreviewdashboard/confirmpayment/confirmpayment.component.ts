import { Component, OnInit } from '@angular/core';
import {ICartItems, ICustomer, IEmployee, IOrder} from "../../../../models/models";
import {Router} from "@angular/router";
import {DataService} from "../../../../services/data.service";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderService} from "../../../../services/order.service";

@Component({
  selector: 'app-confirmpayment',
  templateUrl: './confirmpayment.component.html',
  styleUrls: ['./confirmpayment.component.css']
})
export class ConfirmpaymentComponent implements OnInit {
  searchedCustomer:ICustomer
  empName:string
  paymode:any
  orderId:string
  constructor( private data:DataService,private router: Router, private orderService:OrderService) {
  }

  ngOnInit() {
    this.data.searchedCustomer.subscribe(searchedCustomer => this.searchedCustomer = searchedCustomer)
    if(this.searchedCustomer==null){
      this.navigate()
    }
     let emp = sessionStorage.getItem('emp')
     let e:IEmployee = JSON.parse(emp);
    this.empName=e.firstName
  }
  navigate(){
    this.router.navigateByUrl('/dashboard/(dashboardRouter:home)');
  }

  getValue(paymode){
   this.paymode=paymode

}
  saveOrder(){

    const body = new URLSearchParams();
    body.set('paymode',this.paymode)
    body.set('status','pending')
    body.set('custId',this.searchedCustomer.id.toString())
    body.set('orderId','')
    this.orderService.addOrder(body)
      .subscribe((order:IOrder)=>{
          swal("Order has been Saved Successfully", "Order ID :"+order.orderId.split('ORDER_')[1]);
          this.router.navigateByUrl('/dashboard/(dashboardRouter:home)');
        },
        error=>{
          swal("Error", error.error.errorMessage);
        }
      )
  }
  placeOrder(){
    this.data.orderId.subscribe(orderId => this.orderId= orderId)
    const body = new URLSearchParams();
    body.set('paymode',this.paymode)
    body.set('status','complete')
    body.set('custId',this.searchedCustomer.id.toString())
    if(this.orderId==null){
      body.set('orderId','')
    }else{
      body.set('orderId',this.orderId)
    }
    this.orderService.addOrder(body)
      .subscribe((order:IOrder)=>{
          swal("Order has been Saved Successfully", "Order ID :"+order.orderId);
          this.data.changeorderId(null)
          this.router.navigateByUrl('/dashboard/(dashboardRouter:home)');
        },
        error=>{
          swal("Error", error.error.errorMessage);
        }
      )
  }

}
