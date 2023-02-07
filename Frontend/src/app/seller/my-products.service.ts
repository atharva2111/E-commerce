import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from 'src/app/products'
@Injectable({
  providedIn: 'root'
})
export class myProductService {
  addToList(endpoint:string,product: Product) {
    return this.http.post(this.baseUrl+endpoint,product)
  }

  private baseUrl = 'http://127.0.0.1:8000/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getMyProducts(endpoint:string): Observable<any> {
    
    return this.http.get(this.baseUrl+endpoint);
  }
  addNewProduct(endpoint:string,product:any){
    return this.http.post(this.baseUrl+endpoint,product,{headers:this.headers});
  }
  
  removeProduct(endpoint:string){
    return this.http.delete(this.baseUrl+endpoint);
  }

  updateProduct(endpoint:string,product:Product){
    return this.http.put(this.baseUrl+endpoint,product);
  }

}