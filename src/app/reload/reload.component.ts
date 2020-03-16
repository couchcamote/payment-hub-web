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

    if(this.amount <= 0){
      this.message = "Invalid amount. "
      this.show = true
      return
    }

    this.message="Tap your card to the NFC reader"
    this.show=true
    this.balance=""
    this.paymentService.reload(this.amount)
    .subscribe((resp) => {
      console.log("RESPONSE" + resp);
        this.balance = resp;
        this.message=`Reloading succesful. Your new balance is ${this.balance} `
        this.show = true;
    }, error => {
      console.error('error handled in page', error);
      this.message = error.error;
      this.show = true;
    });
  }

}
