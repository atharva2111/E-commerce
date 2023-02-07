import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  providers:[LoginComponent],
  declarations: [
    AddProductsComponent,
    SellerDashboardComponent,
    SellerLoginComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'sellers/addProducts/:sellername', component: AddProductsComponent },
      { path: 'sellers/:sellername', component: SellerDashboardComponent },
      { path: 'seller/login', component: SellerLoginComponent},
      { path: 'update/:productname',component:UpdateProductComponent}
    ])
  ],
})
export class SellerModule { }
