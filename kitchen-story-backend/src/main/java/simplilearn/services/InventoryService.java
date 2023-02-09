package simplilearn.services;

import java.util.List;

import simplilearn.model.Inventory;


public interface InventoryService {
	
	public List<Inventory> findAll();
	public Inventory findById(long theId);
	public Inventory save(Inventory theInventory);
	public Inventory deleteById(long theInventory);
	public Inventory findByFoodName(String foodname);

	
}
