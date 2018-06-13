import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../models/models";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  empName:string
  cashDrawerId:number
  date:Date
  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit() {
    let employee = sessionStorage.getItem('emp')
    let emp:IEmployee = JSON.parse(employee);
    if(emp==null){
      this.router.navigateByUrl('/');
      return
    }
    this.empName=emp.firstName
    this.date=new Date()
    this.cashDrawerId=emp.cashDrawerId
  }

  logout(){
    this.loginService.logout(this.cashDrawerId)
      .subscribe((data:any)=>{
          swal({
            title:"Confirm Cash Drawer Balance",
            text:"Your Cash Balance is :"+data.endBal,
            buttons:[
              'Cancel',
              'Confirm'
            ],
            dangerMode:true
          }).then((isConfirm)=>{
            sessionStorage.clear()
            this.router.navigateByUrl('/');
          });
        },
        error=>{
          this.router.navigateByUrl('/');
        }
      )
  }

}
