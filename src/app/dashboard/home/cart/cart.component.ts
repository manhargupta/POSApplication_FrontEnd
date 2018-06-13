import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ICart, ICartDto, ICartItems, ICustomer, IProducts} from "../../../models/models";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() carts:ICartItems[]
  @Input() subTotal:number
  @Input() searchedCustomer:ICustomer
  @Output() res = new EventEmitter<any>();
  @Output() resCust = new EventEmitter<any>();

  showElement=false
  customers:ICustomer[]

  constructor(private custService:CustomerService,private cartService:CartService,private router: Router, private ds:DataService,private activatedRoute: ActivatedRoute) {
    this.customers=[]
    this.searchedCustomer=null
  }
  ngOnInit() {
    this.ds.searchedCustomer.subscribe(searchedCustomer => this.searchedCustomer = searchedCustomer)

    if(this.searchedCustomer==undefined){
      return
    }
    this.getCustomerCart()
  }

  getCustomerCart(){
    let custId:number=this.searchedCustomer.id;
    this.subTotal=0
    this.cartService.getCustomerCart(custId)
      .subscribe((data:ICartDto)=>{
          this.carts=data.response.cartItems
          this.res.emit(this.carts)
        },
        error=>{
          this.carts=[]
          this.res.emit(this.carts)
          if(error.error.errorMessage!='No Cart Exist for this Customer') {
            swal("Error", error.error.errorMessage);
          }else{
            this.carts=[]
            this.res.emit(this.carts)
          }
        }
      )
  }

  deleteProduct(pId){
    let custId=this.searchedCustomer.id;
    this.cartService.removeProductFromCart(pId,custId)
      .subscribe((data:any)=>{
          this.ngOnInit();
        },
        error=>{
          swal("Error", error.error.errorMessage);
        }
      )
  }
  incProductQuantity(pId){
    let custId=this.searchedCustomer.id;
    this.cartService.incProductQuantity(pId,custId)
      .subscribe((data:any)=>{
          this.ngOnInit();
        },
        error=>{
          swal("Error", error.error.errorMessage);
        }
      )
  }
  decProductQuantity(pId){
    let custId=this.searchedCustomer.id;
    this.cartService.decProductQuantity(pId,custId)
      .subscribe((data:any)=>{
          this.ngOnInit();

        },
        error=>{
          swal("Error", error.error.errorMessage);
        }
      )
  }

  deleteCustomerCart(){
    let custId=this.searchedCustomer.id;
    this.cartService.deleteCustomerCart(custId)
      .subscribe((data:any)=>{
          swal("Success", "Customer Cart Deleted Successfully");
          this.ngOnInit();

        },
        error=>{
          swal("Error", error.error.errorMessage);
        }
      )
  }
  showCustomerList(value:boolean){
    if(value==true && this.customers.length!=0){
      this.showElement=value
    }else {
      this.showElement = value
    }
  }

  customerSearch(search){
    if(search!=''){
      this.showCustomerList(true)
      this.cartService.getCustomerSearch(search)
        .subscribe((data: ICustomer[]) => {
            this.customers = data
            this.showCustomerList(true)
          },
          error => {
            swal("Error", error.error.errorMessage);
          }
        )
      }else{
      this.showCustomerList(false)
      }
    }
@ViewChild('custSearch') custSearch;
  selectCustomer(custId){
    this.searchedCustomer=  this.customers.filter((cust)=>cust.id==custId)[0]
    this.showCustomerList(false)
    this.custSearch.nativeElement.value=this.searchedCustomer.firstName
    this.resCust.emit(this.searchedCustomer)
    this.getCustomerCart()
    sessionStorage.setItem('cust',JSON.stringify(this.searchedCustomer))
    this.customers=[]
    this.ds.changeCustomer(this.searchedCustomer)

  }
  removeCustomer(){
    this.searchedCustomer=null;
    sessionStorage.removeItem('cust');
    this.custSearch.nativeElement.value=''
    this.carts=[]
    this.res.emit(this.carts)
  }
  reviewCart(){
    if(this.searchedCustomer==undefined){
      swal("Error", "No Customer Exist");
      return
    }
    else if(this.carts[0]==undefined){
      swal("Error", "No Cart Exist");
      return
    }
    this.router.navigateByUrl('/dashboard/(dashboardRouter:home/cartreview)');
    this.ds.changeCustomer(this.searchedCustomer)
    this.ds.changeCart(this.carts)
    this.ds.changeSubTotal(this.subTotal)

  }
}
