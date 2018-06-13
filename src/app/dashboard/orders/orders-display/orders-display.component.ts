import {Component, Input, OnInit} from '@angular/core';
import {ICartItems, IOrder} from "../../../models/models";
import {DataService} from "../../../services/data.service";
import {OrderService} from "../../../services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders-display',
  templateUrl: './orders-display.component.html',
  styleUrls: ['./orders-display.component.css']
})
export class OrdersDisplayComponent implements OnInit {
  selectedOrder:IOrder
  carts:any[]

  constructor(private ds:DataService,private orderService:OrderService,private router: Router) { }

  ngOnInit() {
    this.ds.selectedOrder.subscribe(selectedOrder =>{
      this.selectedOrder = selectedOrder
      if(this.selectedOrder!=null){
        this.carts = this.selectedOrder[0].order.items
      }
    })
  }

  reload(){
    this.orderService.reloadOrder(this.selectedOrder[0].order.orderId)
      .subscribe((data:any)=>{
          swal("Success", "Order has been Reloaded to Cart Successfully");
          this.ds.changeCustomer(this.selectedOrder[0].order.customer)
          this.ds.changeorderId(this.selectedOrder[0].order.orderId)
          this.selectedOrder=null
          this.router.navigateByUrl('/dashboard/(dashboardRouter:home)');

        },
        error=>{
          swal("Error", error.error.errorMessage);
          if(error.error.errorMessage=='Please Login First!'){
            this.router.navigateByUrl('/');
          }
        }
      )
  }
  cancel(){
    this.selectedOrder=null
  }

}
