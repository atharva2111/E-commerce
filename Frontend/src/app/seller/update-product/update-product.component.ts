import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { myProductService } from './../my-products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product!:Product;
  UpdateProduct!:FormGroup;
  private routeParams = this.route.snapshot.paramMap;
  private FromRoute = String(this.routeParams.get('productname'));

  ngOnInit(): void {
    this.routeParams=this.route.snapshot.paramMap;
    this.FromRoute=String(this.routeParams.get('productname'));
    
  }
  constructor(private myProduct:myProductService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private location:Location){
      this.UpdateProduct=this.fb.group({
        name: '',
        price: 0,
        description: ''
      })

  }
  updateProduct(){
    this.product=this.UpdateProduct.getRawValue();
    console.log(this.product)
    this.myProduct.updateProduct('product/'+this.FromRoute,this.product).subscribe(res=>{});
    this.location.back()
  }

}
