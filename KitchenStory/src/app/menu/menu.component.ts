import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService, private router : Router){
    // console.log(typeof(router.url)); it is a string
    
  }
  ngOnInit(): void {
    
  }

  isLandingPage(){
    if(this.router.url == "/"){
      return false;
    }
    return true;
  }
  
}
