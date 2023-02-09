package simplilearn.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import simplilearn.model.Inventory;

import simplilearn.repository.InventoryRepository;



@Service(value="inventoryService")
public class InventoryServiceImpl implements InventoryService {

	private InventoryRepository inventoryRepository;
	
	// internally used by our framework
	public InventoryServiceImpl() {
		super();
	}

	public InventoryServiceImpl(InventoryRepository inventoryRepository) {
		super();
		System.out.println("the spring ioc container invoked constructor to assemble 'todorepository' bean");
		this.inventoryRepository = inventoryRepository;
	}

	// setting the todoRepository method and getting it in the Program.java
	// if constructor no need of setTodoRepository
	
	@Autowired // can be used on setter, constructor and field
	// helps spring to assemble the dependency
	// now it is used in the setter method
	public void setTodoRepository(InventoryRepository inventoryRepository) {
		System.out.println("spring ioc container invoked setter method to assemble 'todoRepository' bean");
		this.inventoryRepository = inventoryRepository;
	}
	
	@Override
	public List<Inventory> findAll() {
		return inventoryRepository.findAll();
	}

	@Override
	public Inventory findById(long theId) {
		return inventoryRepository.findById(theId).get();
	}

	@Override
	public Inventory save(Inventory theInventory) {
		return inventoryRepository.save(theInventory);
	}

	@Override
	public Inventory deleteById(long theId) {
		inventoryRepository.deleteById(theId);
		return null;
	}

	@Override
	public Inventory findByFoodName(String foodname) {
		return inventoryRepository.findByFoodName(foodname);
	}


}
