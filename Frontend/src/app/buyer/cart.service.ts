import { EditProductService } from 'src/app/edit-product.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: Product[]=[] ;
  

  constructor( private http:HttpClient,private editProduct:EditProductService) { }
  
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  remove(product: Product){
    this.items.forEach( (item, index) => {
      if(item === product) this.items.splice(index,1);
    });

  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
