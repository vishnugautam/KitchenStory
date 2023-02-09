import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService, private router : Router, private route : ActivatedRoute, private location : Location){
    // console.log(typeof(router.url)); it is a string
    this.foodname = this.location.path();
    this.overview = this.location.path();
    this.checkout = this.location.path();
  }
  ngOnInit(): void {
    // console.log(window.location.pathname);
    // console.log( this.location.path());
  }

  foodname! : String;
  overview! : String;
  checkout! : String;
  isLandingPage(){
    if(this.router.url == "/" || this.location.path() == this.foodname  || this.location.path() == this.overview  || window.location.pathname == "/checkout"){
      return false;
    }
    return true;
  }

  isCheckOutPage(){
    if(this.location.path() == "/checkout"){
      return true;
    }
    return false;
  }
  
  
}
