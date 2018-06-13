import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {ICartDto, ICartItems, ICustomer, IProducts} from "../../../models/models";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()  carts:ICartItems[]
  @Input() searchedCustomer:ICustomer
  @Output() res = new EventEmitter<any>();

  products:IProducts[]
  constructor(private productService:ProductService,private cartService:CartService,private router: Router) {
    this.products=[]
    this.carts=[]

  }
  ngOnInit() {
    this.productService.getProducts()
      .subscribe((data:any)=>{
            this.products=data.products
        },
        error=>{
        if(error.error.errorMessage==undefined){
          swal("Error", "Some Error Occurred");
          this.router.navigateByUrl('/');
          return
          }
          swal("Error", error.error.errorMessage);
          if(error.error.errorMessage=='Please Login First!'){
            this.router.navigateByUrl('/');
          }
        }
      )
  }

  productSearch(search){
    if(search==''){
      this.ngOnInit()
    }else {
      this.productService.getProductSearch(search)
        .subscribe((data: any) => {
            this.products = data.products
          },
          error => {
            swal("Error", error.error.errorMessage);
          }
        )
    }
  }
  addProductToCart(pid:string){
    if(this.searchedCustomer==undefined){
      swal("Error", "Please Select a Customer");
      return
    }
    const body = new URLSearchParams();
    body.set('pid',pid)
    body.set('custId',this.searchedCustomer.id.toString())

    this.productService.addToCart(body)
      .subscribe((data:any)=>{
          this.getCart()
        },
        error=>{
          swal("Error", error.error.errorMessage);
        }
      )
  }

  getCart(){
    let custId:number=this.searchedCustomer.id;
    this.cartService.getCustomerCart(custId)
      .subscribe((data:ICartDto)=>{
          this.carts=data.response.cartItems
          this.res.emit(this.carts)
        },
        error=>{
          swal("Error", error.error.errorMessage);
        }
      )
  }

}
