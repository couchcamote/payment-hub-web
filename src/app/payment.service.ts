import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  host = "http://192.168.0.195:9566";

  constructor(private http: HttpClient) {

  }

  checkBalance() :  Observable<string> {
    return this.http.get<string>(`${this.host}/balance`);
  }

  pay(amount:number) : Observable<string> {
    return this.http.get<string>(`${this.host}/pay/${amount.toFixed(2)}`);
  }

  reload(amount:number) :  Observable<string> {
    return this.http.get<string>(`${this.host}/reload/${amount}`);
  }
}
