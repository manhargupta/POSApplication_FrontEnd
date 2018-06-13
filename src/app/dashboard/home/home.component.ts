import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ICartItems, ICustomer} from "../../models/models";
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  carts:ICartItems[]
  subTotal:number=0
  searchedCustomer:ICustomer
  constructor(private elementRef: ElementRef, private ds:DataService) { }

  ngOnInit() {
    this.ds.searchedCustomer.subscribe(searchedCustomer => this.searchedCustomer = searchedCustomer)

    if(this.searchedCustomer==undefined){
      return
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }
  updateCart(cartsArr){
    this.carts=cartsArr;
    this.carts.sort((a:ICartItems,b:ICartItems)=>{
      return b.id-a.id;
    })
    this.subTotal=0
    this.calculateSubTotal()
  }
  updateCust(cust){
    this.searchedCustomer=cust;
  }

  calculateSubTotal(){
    this.carts.forEach((cart)=>{
      this.subTotal += cart.quantity*cart.product.price;
    })
  }

}
