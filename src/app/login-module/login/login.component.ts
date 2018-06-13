import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {IEmployee} from "../../models/models";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  errorMsg:string;
  constructor(private elementRef: ElementRef,private router: Router,private loginService:LoginService) {

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#488ed3';
  }

  login(name:string,pass:string,startbal:string){
    const body = new URLSearchParams();
    body.set('email',name)
    body.set('startbal',startbal)
    body.set('userSecret.pass',pass)
    this.loginService.login(body)
      .subscribe((data:IEmployee)=>{
          sessionStorage.setItem('emp',JSON.stringify(data))
          sessionStorage.setItem('token',data.token)

          this.router.navigateByUrl('/dashboard/(dashboardRouter:home)');
        },
        error=>{
        this.errorMsg=error.error.errorMessage
        }
      )
  }
}

