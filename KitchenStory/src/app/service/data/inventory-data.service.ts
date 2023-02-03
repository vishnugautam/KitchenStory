import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from 'src/app/inventory/inventory.component';

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  constructor(private httpClient : HttpClient) { }

  retrieveAllFoods(food_name: any) {
    return this.httpClient.get<Inventory[]>(`http://localhost:8080/${food_name}/inventory`) // which returns array of inventory
  }

  retrieveFood(food_name : String, id : number){
    return this.httpClient.get<Inventory>(`http://localhost:8080/${food_name}/inventory/${id}`)
  }
  updateItem(food_name : String, inventory : Inventory, id : number){
    return this.httpClient.put(`http://localhost:8080/${food_name}/inventory/${id}`, inventory);
  }
  createItem(food_name : String, inventory : Inventory){
    return this.httpClient.post(`http://localhost:8080/${food_name}/inventory`, inventory);
  }
}
