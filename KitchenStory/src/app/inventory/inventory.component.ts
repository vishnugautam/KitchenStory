import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})



export class InventoryComponent {

  // member variable
  // inventory = [{
  //   id: 1, description: 'Idli'},
  //   {id: 2, description: 'dosa'}
  //   ]

  inventory = [new Inventory(1, "Idli", "Made from rice", 20, new Date(), "Annapoorna", "Tirupur"),
               new Inventory(2, "Dosa", "Made from rice", 70, new Date(), "Annapoorna", "Tirupur"),
               new Inventory(3, "Appum", "Made from rice", 30, new Date(), "Annapoorna", "Tirupur")]
}

export class Inventory{
  constructor(public id : number, public foodName : string, public foodDescription : string, public price : number, public date : Date, public hotelName : string, public hotelAddress : string){

  }
}