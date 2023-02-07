import { RegistrationService } from './../registration.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  Register!:FormGroup;
  usertypes=[{id:1,type:'seller'},
              {id:2,type:'buyer'}];
  
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private regService:RegistrationService){
    
      this.Register=this.formBuilder.group({
        username:'',
        email:'',
        password:'',
        usertype:''
      })
    }
  

  register(){
    console.log(this.Register.getRawValue());
    this.regService.registerUser(this.Register.getRawValue()).subscribe(res=>{});
    
    window.alert("user registered successfully")
    this.router.navigate(['/']);
  }
}
