import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {path:"",component:LoginComponent},

    ])
  ],
  exports:[
    RouterModule
  ],
  declarations: [
    LoginComponent,
    ],
  bootstrap: [LoginComponent]
})
export class LoginModuleModule { }
