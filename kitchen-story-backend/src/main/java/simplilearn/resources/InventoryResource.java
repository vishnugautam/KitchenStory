package simplilearn.resources;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.aspectj.weaver.ast.Instanceof;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import simplilearn.errors.TodoNotFoundException;
import simplilearn.model.Inventory;
import simplilearn.services.InventoryService;


// like service annotation and repository annotation
// it converts this class into RESTful resource 

@CrossOrigin(origins = "http://localhost:4200") 
@RestController
public class InventoryResource {
		
		@Autowired
		private InventoryService inventoryService;
		
		@DeleteMapping(path = "/admin/inventory/{id}")
		public ResponseEntity delete(@PathVariable long id) {
			Inventory theTodo = inventoryService.deleteById(id);
			
			if(theTodo != null) {
				// noContent means it would return 204 status code 
				return ResponseEntity.noContent().build();
			}
			
			return ResponseEntity.notFound().build();
		}
	
		// it is used to map the POST method 
		@PostMapping(path = "/admin/inventory/{food_name}")
		//Request Body contains the JSON data it has to be converted to Java object so we use RequestBody
		// @Valid means whenever json comes from client in POST it checks weather valid information is sent 
		// only consider valid annotation
		// it goes to handleMethodNotValid method in the centralized which is the HandleMethodArgumentNotValid in CustomizedTodoErrorMessageHandler
		public ResponseEntity createFood(@PathVariable String food_name, @Valid @RequestBody Inventory item) {
			System.out.println("inside the post method");
			Inventory saveTodo = inventoryService.save(item);
			
			// ServletUriComponentsBuilder is having fromCurrentRequest() which is  http://localhost:8080/users/vishnu/todos
			// current pequest + path =  http://localhost:8080/users/vishnu/todos + /id and buildAndExpand replace the id template with the getID()
			// saveTo would create the id value and getID() would get the ID and replace the placeholder using buildAndExpand and convert it to Uri
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(saveTodo.getId()).toUri();
			
			// created would send 201 
			return ResponseEntity.created(location).build();
		}
		
		
			@PutMapping(path = "/admin/inventory/{id}")
			public ResponseEntity updateFood(@PathVariable long id, @Valid @RequestBody Inventory item) {
				System.out.println("inside the put method");
				Inventory saveTodo = inventoryService.save(item);
				URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(saveTodo.getId()).toUri();
				 
				return ResponseEntity.created(location).build();
			}
	
		
		
		
		@GetMapping (path = "/admin/inventory/{hotel_address}")
		public List<Inventory> getAllFoods(@PathVariable String hotel_address){
			System.out.println("username: " + hotel_address);
			return inventoryService.findAll();
		}
		
		@GetMapping(path="/admin/inventory/search/{food_name}")
		public List<Inventory> getFoodByName(@PathVariable String food_name) {
			Inventory foodname = inventoryService.findByFoodName(food_name);
			if(foodname == null) {
				throw new TodoNotFoundException("foodname - " + food_name);
			}
			List items = new ArrayList<>();
			items.add(foodname);
//			System.out.println(items.getClass().getName());
			return items;
		}
		
		@GetMapping (path = "/admin/inventory/{hotel_address}/{id}")
		public Inventory getFood(@PathVariable String hotel_address, @PathVariable long id) {
			Inventory theTodo = inventoryService.findById(id);
			
			if(theTodo == null) {
				throw new TodoNotFoundException("id - " + id);
			}
			return theTodo;
		}
		
}
