import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  // member variables
  username = '';
  password = '';
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router: Router, public hardcoded : HardcodedAuthenticationService){

  }

  handleLogin(){
    // make use hardcoded authentication service
    if(this.hardcoded.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      // navigate to homepage component
      this.router.navigate(['home', this.username]);
    } else {
      this.invalidLogin = true;
      
    }
    
  }
}
