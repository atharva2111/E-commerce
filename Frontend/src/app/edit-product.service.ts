import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from 'src/app/products'
@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  addToList(endpoint:string,product: Product) {
    return this.http.post(this.baseUrl+endpoint,product)
  }

  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getProductsList(endpoint:string): Observable<Product[]> {
    
    return this.http.get<Product[]>(this.baseUrl+endpoint);
  }
  
  getProduct(endpoint:string,name:string):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+endpoint+"/"+name)
  }
}