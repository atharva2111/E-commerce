import { UpdateProductComponent } from './seller/update-product/update-product.component';
import { BuyerLoginComponent } from './buyer/buyer-login/buyer-login.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BuyerModule } from './buyer/buyer.module';
import { SellerModule } from './seller/seller.module';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component'
import { RegistrationComponent } from './registration/registration.component';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { SearchBarComponent } from './buyer/search-bar/search-bar.component';
import { CartComponent } from './buyer/cart/cart.component';
import { PreviousOrderComponent } from './buyer/previous-order/previous-order.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { AddProductsComponent } from './seller/add-products/add-products.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { FormsModule } from '@angular/forms';


@NgModule({
  providers:[LoginComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1600 }),
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'buyer/login',component: BuyerLoginComponent},
      { path: 'buyer/:username',component: BuyerDashboardComponent},
      { path: 'buyer/cart/:username', component: CartComponent },
      { path: 'previous_order', component: PreviousOrderComponent},
      { path: 'sellers/addProducts/:sellername', component: AddProductsComponent },
      { path: 'sellers/:sellername', component: SellerDashboardComponent },
      { path: 'seller/login', component: SellerLoginComponent},
      { path: 'update/:productname',component:UpdateProductComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    RegistrationComponent,
    FooterComponent,
    LoginComponent,
        
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


