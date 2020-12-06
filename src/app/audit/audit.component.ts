import { Component, OnInit } from '@angular/core';
import { AuditService} from '../audit.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  message = "";
  show:boolean = false;
  data = "";

  constructor(private auditService:AuditService) { }
  
  ngOnInit(): void {
    this.message=""
    this.show=false
  }

  onSubmit() {

    this.show=true

    this.auditService.getLatestTransactions()
    .subscribe((resp) => {
      console.log("RESPONSE" + resp);
        this.data = resp;
        this.message=""
        this.show=false
    }, error => {
      console.error('error handled in page', error);
      this.message = error.error;
      this.show = true;
    });
  }

}
