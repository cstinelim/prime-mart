import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  },
  {
    path: 'acc-info',
    loadChildren: () => import('./acc-info/acc-info.module').then( m => m.AccInfoPageModule)
  },
  {
    path: 'address-info',
    loadChildren: () => import('./address-info/address-info.module').then( m => m.AddressInfoPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
