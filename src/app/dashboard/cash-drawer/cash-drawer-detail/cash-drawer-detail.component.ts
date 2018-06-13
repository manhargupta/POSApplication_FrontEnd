import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ICashDrawer} from "../../../models/models";

@Component({
  selector: 'app-cash-drawer-detail',
  templateUrl: './cash-drawer-detail.component.html',
  styleUrls: ['./cash-drawer-detail.component.css']
})
export class CashDrawerDetailComponent implements OnInit {
  selectedCashDrawer:ICashDrawer[]

  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.selectedCashDrawer.subscribe(selectedCashDrawer =>{
      this.selectedCashDrawer = selectedCashDrawer
    })
  }


}

