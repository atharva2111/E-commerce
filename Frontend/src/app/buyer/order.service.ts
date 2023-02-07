import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: Product[] = [];
  constructor() { }
  PlaceOrder(products:Product[]){
    this.items=products;
     
  }
  getOrder(){
    return this.items;
  }
}
