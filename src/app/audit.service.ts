import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  host = environment.api.host;

  constructor(private http: HttpClient) {

  }

  getLatestTransactions() :  Observable<string> {
    return this.http.get<string>(`${this.host}/transactions`);
  }

}
