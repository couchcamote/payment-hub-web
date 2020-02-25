import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  message = "";
  show:boolean = false;

  balance:string  = '0'
  amount = 0
  constructor(private paymentService:PaymentService) { }
  
  ngOnInit(): void {
    this.message=""
    this.show=false
  }

  onSubmit() {
    console.log("FORM SUBMIT");
    this.message="Tap your card to the NFC reader"
    this.show=true
    this.balance=""
    this.paymentService.reload(this.amount)
    .subscribe((resp) => {
      console.log("RESPONSE" + resp);
        this.balance = resp;
        this.message=`Your new balance is ${this.balance} `
    }, error => {
      console.error('error handled in page', error);
      this.message = error.error;
      this.show = true;
    });
  }

}
