package simplilearn.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import simplilearn.model.Inventory;


public interface InventoryRepository extends JpaRepository<Inventory, Long>{

	Inventory findByFoodName(String foodname);
// spring boot would automatically provides the implementation of Todo repository 
// based upon the entity Todo and identifier type which is Long from Todo.java
// table name is picked by annotations like @Table in Todo.java
	
}
