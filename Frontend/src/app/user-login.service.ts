import { Observable } from 'rxjs';
import { User } from './User';
import { Injectable ,EventEmitter,Input,Output} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { EventEmitter } from 'stream';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  @Output() fire:EventEmitter<any>=new EventEmitter();

  private baseUrl = 'http://127.0.0.1:8000/';
  token="";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  //headers.append('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }

  verifyLogin(form_data:FormData,endpoint:string){
    return this.http.post(this.baseUrl+endpoint,form_data,{headers:this.headers})
  }
  LoginSuccess(login:boolean){
    this.fire.emit(login);
  }
  getEmittedvalue(){
    return this.fire;
  }
  isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now();
  }

}
