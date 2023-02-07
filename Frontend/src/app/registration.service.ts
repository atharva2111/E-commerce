import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://127.0.0.1:8000/register';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http:HttpClient) { }

  registerUser(form:any){
    return this.http.post(this.baseUrl,form);
  }
}
