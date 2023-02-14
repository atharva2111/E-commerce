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
  private baseUrl="http://127.0.0.1:8000/"

  constructor( private http:HttpClient,private editProduct:EditProductService) { }
  
  addToCart(endpoint:string,product: Product) {
    return this.http.post(this.baseUrl+endpoint,product)
    // this.items.push(product);
  }

  getItems(endpoint:string) {
    return this.http.get(this.baseUrl+endpoint)
  }

  remove(product: Product){
    this.items.forEach( (item, index) => {
      if(item === product) this.items.splice(index,1);
    });

  }

  clearCart(endpoint:string) {
    return this.http.delete(this.baseUrl+endpoint)
  }

}
