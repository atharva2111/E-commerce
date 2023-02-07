import { Observable } from 'rxjs';
import { User } from './../User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string="";
  password:string="";
  private user !:User;
  verify:boolean=false;
  //login_group=new FormGroup({username:new FormControl},{password: new FormControl});
  constructor(
      private router:Router,
      private http:HttpClient,
        ){}
  registerUser(){
    this.router.navigate(['/register'])
  }
  buyerLogin(){
    
    this.router.navigate(['/buyer/login'])
  }
  sellerLogin(){
    this.router.navigate(['/seller/login'])
    
  }
}
