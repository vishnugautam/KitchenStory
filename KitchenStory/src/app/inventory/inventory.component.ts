import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryDataService } from '../service/data/inventory-data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})



export class InventoryComponent implements OnInit{

  // member variable
  // inventory = [{
  //   id: 1, description: 'Idli'},
  //   {id: 2, description: 'dosa'}
  //   ]
  // foodName = this.route.snapshot.params["foodName"];
  // foodDescription = this.route.snapshot.params["foodDescription"];
  // date = this.route.snapshot.params["date"];
  // price = this.route.snapshot.params["price"];;
  // hotelName = this.route.snapshot.params["hotelName"];
  // hotelAddress = this.route.snapshot.params["hotelAddress"];

  constructor(private inventoryDataService : InventoryDataService, private router : Router, private route : ActivatedRoute){
  }
  ngOnInit(): void {
    
    this.refreshInventory();
    
 
  }



  inventory : Inventory[] | undefined;

  refreshInventory(){
    this.inventoryDataService.retrieveAllFoods('tirupur').subscribe(
      response => {
        // console.log(response);
        this.inventory = response;
        // console.log(this.inventory);
        
        
      }
    )
  }

  updateInventory(id : any){
    // console.log(id);
    this.router.navigate(['inventory', id])
    
  }

  id! : number;

  deleteFood(id : number){
    console.log(id);
    
    this.inventoryDataService.deleteFoodById(this.id).subscribe(
      data => {
        this.router.navigate(['inventory']),
        window.location.reload()
      }
    )
  }


  
}

  

export class Inventory{
  constructor(public id : number, public foodName : string, public foodDescription : string, public price : number, public date : Date, public hotelName : string, public hotelAddress : string){
  }
}