import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  message = "";
  show:boolean = false;

  balance:number  = 0.0
  amount:string = "0.0"
  newBalance=""
  constructor(private paymentService:PaymentService) { }
  
  ngOnInit(): void {
    this.message=""
    this.show=false
  }

  onSubmit() {
    console.log("FORM SUBMIT");
    this.message="Tap your card to the NFC reader"
    this.show=true
    this.balance=0.0

    this.paymentService.pay(parseFloat(this.amount))
    .subscribe((resp) => {
      console.log("RESPONSE" + resp);
        this.newBalance = resp;
        this.message=`Your new balance is ${this.newBalance} `
    }, error => {
      console.error('error handled in page', error);
      this.message = error.error;
      this.show = true;
    });
  }



}
