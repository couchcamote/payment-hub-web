import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { ReloadComponent } from './reload/reload.component';
import { PaymentComponent } from './payment/payment.component';
import { AuditComponent } from './audit/audit.component';


const routes: Routes = [
  {path : 'balance', component:BalanceComponent},
  {path : 'payment', component:PaymentComponent},
  {path : 'reload', component:ReloadComponent},
  {path : 'transactions', component:AuditComponent},
  { path: '', redirectTo: '/balance', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BalanceComponent, PaymentComponent, ReloadComponent, AuditComponent]
