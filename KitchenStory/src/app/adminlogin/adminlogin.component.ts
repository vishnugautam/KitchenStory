import { Component } from '@angular/core';

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

  handleLogin(){
    if(this.username == "vishnu" && this.password == "12345"){
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      
    }
    
  }
}
