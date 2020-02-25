import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { ReloadComponent } from './reload/reload.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path : 'balance', component:BalanceComponent},
  {path : 'payment', component:PaymentComponent},
  {path : 'reload', component:ReloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BalanceComponent, PaymentComponent, ReloadComponent]
