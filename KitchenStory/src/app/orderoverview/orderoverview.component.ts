import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory/inventory.component';
import { InventoryDataService } from '../service/data/inventory-data.service';

@Component({
  selector: 'app-orderoverview',
  templateUrl: './orderoverview.component.html',
  styleUrls: ['./orderoverview.component.css']
})
export class OrderoverviewComponent implements OnInit{

  constructor(private route : ActivatedRoute, private inventoryDataService : InventoryDataService, private router : Router){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.retrieveFoodById();
    
  }

  id! : number;
  inventory! : Inventory;
  retrieveFoodById(){
    this.inventoryDataService.retrieveFoodById('tirupur', this.id).subscribe(
      response => {
        this.inventory = response;
      }
    )
  }

  checkout(){
    this.router.navigate(['checkout'])
  }

}
