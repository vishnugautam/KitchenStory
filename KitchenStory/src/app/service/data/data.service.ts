import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }

  executeDataRestService(){
    return this.httpClient.get<DataService>(`http://localhost:8080/home`);
    
    
  }
}
