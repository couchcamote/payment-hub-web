import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule} from '@angular/forms';
import { PaymentService} from './payment.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuditComponent } from './audit/audit.component';
import { AuditService } from './audit.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    routingComponents,
    AuditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule    
  ],
  providers: [PaymentService, AuditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
