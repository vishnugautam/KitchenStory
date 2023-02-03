import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message: string | undefined;



  constructor(private httpClient : HttpClient) { }

  executeDataRestService(){
    return this.httpClient.get<DataService>(`http://localhost:8080/home`);
  }
  executeDataRestServiceWithParameter(name: any){
    return this.httpClient.get<DataService>(`http://localhost:8080/home/${name}`);
  }

}
