import { UserLoginService } from 'src/app/user-login.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  ls!:boolean;
  constructor(private login:UserLoginService){
    this.ls=false;

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.login.getEmittedvalue().subscribe(arg => this.ls = arg);
    
  }
  
}


