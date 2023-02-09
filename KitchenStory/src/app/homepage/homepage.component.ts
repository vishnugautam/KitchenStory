import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory/inventory.component';
import { InventoryDataService } from '../service/data/inventory-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  // declare a member variable
  name = '';
  welcomeMessageFromService: string | undefined;
  foodName = "";
  foodDescription = "";
  date = "";
  price = 0;
  hotelName = "";
  hotelAddress = "";

  inventory! : Inventory;
  id! : number;


  constructor(private route : ActivatedRoute, private inventoryDataService : InventoryDataService, private router : Router){

  }
  ngOnInit(): void {
    this.name =  this.route.snapshot.params['name'];
     // we first assign the todo with 1 instance so that it is not undefined 
     // but admin has to know the last id so that he can edit the id and so the row appears at the last 
     // ex, if last item is 5, then put id as 6
     this.inventory = new Inventory(1,'idli', 'made from rice', 50, new Date, 'Annapoorna', 'Tirupur');     
  }
  saveItem(){
      this.inventoryDataService.createItem("idli", this.inventory).subscribe(
        data => {
            this.router.navigate(['inventory'])
        }
      )
  }
  

}
