import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  selectedIndex = 1;

  setSelected(id: number) {
    this.selectedIndex = id;
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateDashboard(v){
    this.setSelected(v)
    this.router.navigateByUrl('/dashboard/(dashboardRouter:home)');
  }
  navigateOrdersList(v){
    this.setSelected(v)
    this.router.navigateByUrl('/dashboard/(dashboardRouter:orders/(ordersRouter:list))');
  }
  navigateSavedOrdersList(v){
    this.setSelected(v)
    this.router.navigateByUrl('/dashboard/(dashboardRouter:orders/(ordersRouter:savedlist))');
  }
  navigateCashDrawer(v){
    this.setSelected(v)
    this.router.navigateByUrl('/dashboard/(dashboardRouter:cashdrawer)');
  }
  navigateReport(v){
    this.setSelected(v)
    this.router.navigateByUrl('/dashboard/(dashboardRouter:report)');
  }


}
