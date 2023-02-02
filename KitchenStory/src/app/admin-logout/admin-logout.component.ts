import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit{

  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService){

  }
  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
  }
  
}
