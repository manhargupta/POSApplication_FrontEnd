import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {DataService} from "../../../services/data.service";
import {Router} from "@angular/router";
import {ICashDrawer} from "../../../models/models";
import {CashDrawerService} from "../../../services/cash-drawer.service";

@Component({
  selector: 'app-cash-drawer-list',
  templateUrl: './cash-drawer-list.component.html',
  styleUrls: ['./cash-drawer-list.component.css']
})
export class CashDrawerListComponent implements OnInit {
  cashDrawer:any[]
  selectedCashDrawer:ICashDrawer[]
  isActive:number

  constructor(private cashDrawerService:CashDrawerService,private router: Router, private ds:DataService) {
    this.cashDrawer=[]
  }

  ngOnInit() {
    this.getCashDrawerList()
  }

  getCashDrawerList(){
    this.cashDrawerService.getCashDrawer()
      .subscribe((data:any)=>{
          this.cashDrawer=data.cashdrawers
        },
        error=>{
          swal("Error", error.error.errorMessage);
          if(error.error.errorMessage=='Please Login First!'){
            this.router.navigateByUrl('/');
          }
        }
      )
  }
  selectCashDrawer(cashDrawerDate,i){
    this.isActive=i
    this.selectedCashDrawer= this.cashDrawer[cashDrawerDate];
    this.ds.changeSelectedCashDrawer(this.selectedCashDrawer)
  }
}
