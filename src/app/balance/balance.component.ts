import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent implements OnInit {
  message = "";
  show:boolean = false;

  balance:string  = ''
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
    this.paymentService.checkBalance()
    .subscribe((resp) => {
      console.log("RESPONSE" + resp);
        this.balance = resp;
        this.message=""
        this.show=false
    }, error => {
      console.error('error handled in page', error);
      this.message = error.error;
      this.show = true;
    });
  }

}
