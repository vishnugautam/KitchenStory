import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory/inventory.component';
import { InventoryDataService } from '../service/data/inventory-data.service';

@Component({
  selector: 'app-searcheditems',
  templateUrl: './searcheditems.component.html',
  styleUrls: ['./searcheditems.component.css']
})
export class SearcheditemsComponent implements OnInit{

  constructor(private inventoryDataService : InventoryDataService, private route : ActivatedRoute, private router : Router){
  }

  ngOnInit(): void {
   this.foodname = this.route.snapshot.params['foodname'];
  //  this.searchedItems();
   this.refreshInventory();
   
  //  console.log(this.foodname);
   

  }
  searchedInventory!: Inventory[];
  foodname!: String;
  
  values : Inventory[] | undefined;


  // searchedItems(){
  //   this.inventoryDataService.retrieveFoodByName(this.foodname).subscribe(
  //     response => {
  //       // console.log(response);
  //       this.searchedInventory = response;
  //       console.log(this.searchedInventory);
  //       this.values = Object.values(this.searchedInventory);
  //       console.log(this.values[0], this.values[1]);
  //       // this.values = this.searchedInventory;
  //       // console.log(this.values);
  //     }
  //   )
  // }

  inventory : Inventory[] | undefined;

  refreshInventory(){
    this.inventoryDataService.retrieveFoodByName(this.foodname).subscribe(
      response => {
        // console.log(response);
        this.inventory = response;
        // console.log(this.inventory);
      }
    )
  }

  toOverview(id : number){
    this.router.navigate(['overview', id])
  }
  
}
