import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ProductService} from "./services/product.service";
import {LoginService} from "./services/login.service";
import {CartService} from "./services/cart.service";
import {LoginModuleModule} from "./login-module/login-module.module";
import {CommonModule} from "@angular/common";
import {DashboardModule} from "./dashboard/dashboard-module/dashboard.module";
import {DataService} from "./services/data.service";
import {CustomerService} from "./services/customer.service";
import {OrderService} from "./services/order.service";
import { OrdersComponent } from './dashboard/orders/orders.component';
import { OrdersListComponent } from './dashboard/orders/orders-list/orders-list.component';
import { OrdersDisplayComponent } from './dashboard/orders/orders-display/orders-display.component';
import { SavedOrdersListComponent } from './dashboard/orders/saved-orders-list/saved-orders-list.component';
import {FilterPipe, KeysPipe, SplitPipe} from './dashboard/pipes/customPipe';
import { CashDrawerComponent } from './dashboard/cash-drawer/cash-drawer.component';
import { CashDrawerListComponent } from './dashboard/cash-drawer/cash-drawer-list/cash-drawer-list.component';
import { CashDrawerDetailComponent } from './dashboard/cash-drawer/cash-drawer-detail/cash-drawer-detail.component'
import {CashDrawerService} from "./services/cash-drawer.service";
import {ReportService} from "./services/report.service";
import {WindowRef} from "./models/WindowR";

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrdersListComponent,
    OrdersDisplayComponent,
    SavedOrdersListComponent,
    CashDrawerComponent,
    CashDrawerListComponent,
    CashDrawerDetailComponent,
    KeysPipe,
    SplitPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoginModuleModule,
    DashboardModule,
    CommonModule,
    RouterModule.forRoot([

    ])
  ],
  exports: [
    KeysPipe,
    SplitPipe,
    FilterPipe
  ],
  providers: [ProductService,LoginService,CartService,DataService,CustomerService,OrderService,CashDrawerService,ReportService,WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
