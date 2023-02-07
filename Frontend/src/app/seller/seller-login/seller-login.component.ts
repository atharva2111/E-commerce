
import { TopBarComponent } from './../../top-bar/top-bar.component';
import { User } from './../../User';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserLoginService } from 'src/app/user-login.service';

import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit{
  LoginForm !: FormGroup;
  
  private token:any =""
  private decoded:any
  TopBarComponent: any;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private login:UserLoginService,
    ){
      this.LoginForm=this.formBuilder.group({
        username:'',
        password:''
      })
    }
  user!:User
  form=new FormData();

  
  onSubmit(){
    
    this.form=this.LoginForm.getRawValue();
    //console.log(this.form)
    this.login.verifyLogin(this.form,'seller/login').subscribe(JWtoken=> {
      this.token=JWtoken;
      
      this.decoded= jwt_decode(this.token.access_token);  
    })
   
    this.user=this.LoginForm.value
    //console.log(this.token);
    //console.log(this.decoded);
    
    if (this.decoded.sub==this.user.username){
      this.router.navigate(['sellers',this.user.username])
      this.login.LoginSuccess(true); 
      this.TopBarComponent.ngOnInit();     
    }
    window.alert("wrong password or username")
    this.login.LoginSuccess(false);
    this.router.navigate(["seller/login"])


  }
  
  ngOnInit() {
    
  }
}
