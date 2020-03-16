import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  host = environment.api.host;

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
