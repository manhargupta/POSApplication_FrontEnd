import { Component, OnInit } from '@angular/core';
import {ICartItems, ICustomer} from "../../../../models/models";
import {DataService} from "../../../../services/data.service";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-review',
  templateUrl: './cart-review.component.html',
  styleUrls: ['./cart-review.component.css']
})
export class CartReviewComponent implements OnInit {
  searchedCustomer:ICustomer
  carts:ICartItems[]
  subTotal:number
  constructor( private data:DataService,private router: Router) {
  }

  ngOnInit() {
    this.data.searchedCustomer.subscribe(searchedCustomer => this.searchedCustomer = searchedCustomer)
    this.data.cart.subscribe(carts => this.carts = carts)
    this.data.cart.subscribe(carts => this.carts = carts)
    this.data.subTotal.subscribe(subTotal => this.subTotal = subTotal)
    if(this.searchedCustomer==null){
      this.navigate()
    }
  }
  navigate(){
    if(this.searchedCustomer==null){
      this.router.navigateByUrl('/dashboard/(dashboardRouter:home)');
      return
    }
    this.data.changeCustomer(this.searchedCustomer);
    this.router.navigateByUrl('/dashboard/(dashboardRouter:home)');
  }
}
