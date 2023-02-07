import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserLoginService } from 'src/app/user-login.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-buyer-login',
  templateUrl: './buyer-login.component.html',
  styleUrls: ['./buyer-login.component.css']
})
export class BuyerLoginComponent implements OnInit {
  LoginForm !: FormGroup;
  
  private token:any =""
  private decoded:any
  TopBarComponent: any;
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private login:UserLoginService){
      this.LoginForm=this.formBuilder.group({
        username:'',
        password:''
      })
    }
  user!:User
  form=new FormData();

  
  onSubmit(){
    
    this.form=this.LoginForm.getRawValue();
    console.log(this.form)
    this.login.verifyLogin(this.form,'user/login').subscribe(JWtoken=> {
      this.token=JWtoken;
      
      //const helper = new JwtHelperService();
      this.decoded= jwt_decode(this.token.access_token);
      
    })
    this.user=this.LoginForm.value
    console.log(this.token);
    console.log(this.decoded);
    
    if (this.decoded.sub==this.user.username){
      this.router.navigate(['buyer',this.user.username])
      this.login.LoginSuccess(true); 
      this.TopBarComponent.ngOnInit(); 
    }
    else{
      window.alert("wrong password or username")
      this.login.LoginSuccess(false); 
      this.router.navigate(["buyer/login"])
    }
  }
  ngOnInit(): void {
    
  }
}
