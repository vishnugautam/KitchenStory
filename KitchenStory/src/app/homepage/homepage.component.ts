import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  // declare a member variable
  name = '';
  welcomeMessageFromService: string | undefined;

  constructor(private route : ActivatedRoute, private dataService: DataService){

  }
  ngOnInit(): void {
    this.name =  this.route.snapshot.params['name'];
    
  }

  getWelcomeMesaageWithParameter(){
    // console.log(this.dataService.executeDataRestService()); // Observable object 
    this.dataService.executeDataRestServiceWithParameter(this.name).subscribe(
      response => this.welcomeMessageFromService = response.message,
      error => this.handleErrorResponse(error)
    );
    
  }

  handleSuccessfulResponse(response: { message: string | undefined; }){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.errorMessage;
  }

}
