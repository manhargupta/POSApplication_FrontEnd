import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../../services/report.service";
import {Router} from "@angular/router";
import {WindowRef} from "../../../models/WindowR";

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  nativeWindow: any
  constructor(private reportService:ReportService,private router: Router,private winRef:WindowRef) {
    this.nativeWindow = winRef.getNativeWindow();
  }

  ngOnInit() {
  }

  report(startDate,endDate){
    let s = startDate.toString().split('/')
    let e = endDate.toString().split('/')
    startDate= s[2]+'-'+s[0]+'-'+s[1]
    endDate= e[2]+'-'+e[0]+'-'+e[1]

      this.reportService.genrateReport(startDate, endDate)
        .subscribe((res:any) => {
            let file = new Blob([res],  { type: 'application/vnd.ms-excel' } );
            let fileURL = URL.createObjectURL(file);
            window.open(fileURL);
          },
          error=>{
            swal("Error", error.error.errorMessage);

            if(error.error.errorMessage=='Please Login First!') {
              this.router.navigateByUrl('/');
            }
          }
        )
  }

}
