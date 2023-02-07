import { CartService } from './../cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from './../../products';
import { EditProductService } from 'src/app/edit-product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  products: Product[]=[];
  searchText: any;
  
  constructor(
    private route:ActivatedRoute,
    private cartService:CartService,
    private router:Router,
    private http:HttpClient,
    private editProduct:EditProductService){}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProducts()

  }
  
    
  getProducts(){
    this.editProduct.getProductsList('products').subscribe(products=>this.products=products);
  }
  
  details(name:string){
    this.router.navigate(['products',name])
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');

  }
}
