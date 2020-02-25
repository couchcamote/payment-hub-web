import { Component, OnInit } from '@angular/core';
//import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent implements OnInit {
  message = "";
  show:boolean = false;

  balance:string  = '0'
  amount = 0
  // constructor(private paymentService:PaymentService) { }
  constructor() { }

  ngOnInit(): void {
    this.message=""
    this.show=false
  }

  onSubmit() {
    console.log("FORM SUBMIT");
    this.message="Tap your card to the NFC reader"
    this.show=true
    // this.paymentService.checkBalance()
    // .subscribe((resp) => {
    //   console.log("RESPONSE" + resp);
    //     this.balance = resp;
    // }, error => {
    //   console.error('error handled in page', error);
    //   this.message = error;
    //   this.show = true;
    // });
  }

}
