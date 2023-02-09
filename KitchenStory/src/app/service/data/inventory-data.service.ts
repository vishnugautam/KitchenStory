import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from 'src/app/inventory/inventory.component';

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  constructor(private httpClient : HttpClient) { }

  retrieveAllFoods(hotel_address: any) {
    return this.httpClient.get<Inventory[]>(`http://localhost:8080/admin/inventory/${hotel_address}`) // which returns array of inventory
  }
  retrieveFoodByName(food_name : String){
    return this.httpClient.get<Inventory[]>(`http://localhost:8080/admin/inventory/search/${food_name}`)
  }

  retrieveFoodById(hotel_address : String, id : number){
    return this.httpClient.get<Inventory>(`http://localhost:8080/admin/inventory/${hotel_address}/${id}`)
  }
 
  updateItem(inventory : Inventory, id : number){
    return this.httpClient.put(`http://localhost:8080/admin/inventory/${id}`, inventory);
  }
  createItem(food_name : String, inventory : Inventory){
    return this.httpClient.post(`http://localhost:8080/admin/inventory/${food_name}`, inventory);
  }
  deleteFoodById(id: number){
    return this.httpClient.delete(`http://localhost:8080/admin/inventory/${id}`)
  }
}
