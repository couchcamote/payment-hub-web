import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  message = "";
  show:boolean = true;

  balance  = 100.0
  amount = 0
  constructor() { }

  ngOnInit(): void {
    this.message=""
    this.show=false
  }
  

  onSubmit() {
    console.log("FORM SUBMIT");
    this.message="Tap your card to the NFC reader"
    this.show=true
  }


}
