import { PreviousOrderComponent } from './../../buyer/previous-order/previous-order.component';
import { Product } from 'src/app/products';
import { myProductService } from './../my-products.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  

  AddProduct !: FormGroup;
  product!:Product;
  endpoint:string="products";
  object:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private productService:myProductService,
    private fb:FormBuilder
  ){
    this.AddProduct=this.fb.group({
      name:"",
      price:0,
      description:""
    })
  }
  routeParams = this.route.snapshot.paramMap;
  FromRoute = String(this.routeParams.get('sellername'));
  addProduct(){
    this.object=this.AddProduct.getRawValue();
    console.log(this.object);
    this.product=this.object;
    this.product.sellername=this.FromRoute;
    console.log(this.product);
    this.productService.addNewProduct(this.endpoint,this.product).subscribe(product=>{
      //console.log(product);
    })

    this.router.navigate(['/sellers',this.FromRoute])
 }
}
