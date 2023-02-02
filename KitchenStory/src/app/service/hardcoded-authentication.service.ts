import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    if(username == "vishnu" && password == "12345"){
      // console.log("logged in hardcoded authentication service");
      // store the user information in session storage 
      sessionStorage.setItem('authenticatorUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatorUser');
    return !(user == null); // true
  }

  logout(){
    sessionStorage.removeItem('authenticatorUser');
  }
}
