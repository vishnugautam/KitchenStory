import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory/inventory.component';
import { InventoryDataService } from '../service/data/inventory-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  id!: any;
  inventory!: Inventory;
  constructor(private inventoryDataService : InventoryDataService, private activatedRoute : ActivatedRoute, private router : Router){}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    // we first assign the todo with 1 instance so that it is not undefined 
    this.inventory = new Inventory(1,'idli', 'made from rice', 50, new Date, 'Annapoorna', 'Tirupur');
    this.inventoryDataService.retrieveFoodById('idli', this.id).subscribe(data => 
      this.inventory = data
      )
  }

  saveItem(){
    if (this.id == -1){
      this.inventoryDataService.createItem('idli', this.inventory, this.id).subscribe(
        data => {
          this.router.navigate(['inventory'])
        }
      )
    } else {
      this.inventoryDataService.updateItem('idli', this.inventory, this.id).subscribe(
        data => {
          this.router.navigate(['inventory'])
        }
      )
    }
  }

}
