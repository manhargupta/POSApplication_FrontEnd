import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {LeftMenuComponent} from "../left-menu/left-menu.component";
import {ProductComponent} from "../home/product/product.component";
import {FooterComponent} from "../footer/footer.component";
import {CartComponent} from "../home/cart/cart.component";
import {MaindashboardComponent} from "../maindashboard.component";
import {CartReviewComponent} from "../home/cartreviewdashboard/cart-review/cart-review.component";
import {HomeComponent} from "../home/home.component";
import {CartreviewdashboardComponent} from "../home/cartreviewdashboard/cartreviewdashboard.component";
import {ConfirmpaymentComponent} from "../home/cartreviewdashboard/confirmpayment/confirmpayment.component";
import {MaterialModule} from "../../shared/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OrdersComponent} from "../orders/orders.component";
import {OrdersListComponent} from "../orders/orders-list/orders-list.component";
import {SavedOrdersListComponent} from "../orders/saved-orders-list/saved-orders-list.component";
import {CashDrawerComponent} from "../cash-drawer/cash-drawer.component";
import {CashDrawerDetailComponent} from "../cash-drawer/cash-drawer-detail/cash-drawer-detail.component";
import {CashDrawerListComponent} from "../cash-drawer/cash-drawer-list/cash-drawer-list.component";
import {ReportComponent} from "../report/report.component";
import {ReportFormComponent} from "../report/report-form/report-form.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:"dashboard",component:MaindashboardComponent, children:[
          {path:"home",component:HomeComponent,outlet:"dashboardRouter"},
          {path:"home/cartreview",component:CartreviewdashboardComponent,outlet:"dashboardRouter"},
          {path:"cashdrawer",component:CashDrawerComponent,outlet:"dashboardRouter"},
          {path:"report",component:ReportComponent,outlet:"dashboardRouter"},
          {path:"orders",component:OrdersComponent, outlet:"dashboardRouter", children:[
              {path:"list",component:OrdersListComponent,outlet:"ordersRouter"},
              {path:"savedlist",component:SavedOrdersListComponent,outlet:"ordersRouter"}
            ]},
        ]},
    ])
  ],
  exports:[
    RouterModule
  ],
  declarations: [
    HomeComponent,
    LeftMenuComponent,
    ProductComponent,
    CartComponent,
    FooterComponent,
    MaindashboardComponent,
    CartReviewComponent,
    CartreviewdashboardComponent,
    ConfirmpaymentComponent,
    ReportComponent,
    ReportFormComponent,

  ],
})
export class DashboardModule { }
