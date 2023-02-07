import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { CartComponent } from './cart/cart.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component'
import { PreviousOrderComponent } from './previous-order/previous-order.component';
import { BuyerLoginComponent } from './buyer-login/buyer-login.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    CartComponent,
    BuyerDashboardComponent,
    PreviousOrderComponent,
    BuyerLoginComponent,
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'buyer/login',component: BuyerLoginComponent},
      { path: 'buyer/:username',component: BuyerDashboardComponent},
      { path: 'buyer/cart/:username', component: CartComponent },
      { path: 'previous_order', component:PreviousOrderComponent},
    ])
  ]
})
export class BuyerModule { }
