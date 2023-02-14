import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl='http://127.0.0.1:8000/'
  constructor(private http : HttpClient) { }

  PlaceOrder(endpoint:string,products:Product[]){
    console.log("URL===>",this.baseUrl+endpoint);
    console.log("Products===>",products);
    return this.http.post(this.baseUrl+endpoint,products);  
  }
  getOrder(endpoint:string){
    return this.http.get(this.baseUrl+endpoint)
  }
}
