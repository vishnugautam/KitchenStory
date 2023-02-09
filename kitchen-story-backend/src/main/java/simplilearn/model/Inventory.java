package simplilearn.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

// convert this class to entity 
// we are mapping this class with todos table
@Entity
@Table(name="inventory")
public class Inventory {
	// to make the Id act like primary key we use @Id
	@Id
	// asking hibernate to insert the value using @GeneretedValue 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty @Size(min = 2, message = "the foodname at least should have 2 characters")
	private String foodName;
	
	private String foodDescription;
	private String date;
	private int price;
	private String hotelName;
	private String hotelAddress;
	
	public Inventory() {
		super(); //default
	}
	
	
	public Inventory(long id,
			@NotEmpty @Size(min = 2, message = "the foodname at least should have 2 characters") String foodName,
			@NotEmpty @Size(min = 5, message = "the food description at least should have 5 characters") String foodDescription,
			 int price, String hotelName, String hotelAddress, String date) {
		super();
		this.id = id;
		this.foodName = foodName;
		this.foodDescription = foodDescription;
		this.date = date;
		this.price = price;
		this.hotelName = hotelName;
		this.hotelAddress = hotelAddress;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public String getFoodDescription() {
		return foodDescription;
	}

	public void setFoodDescription(String foodDescription) {
		this.foodDescription = foodDescription;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getHotelAddress() {
		return hotelAddress;
	}

	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}

	
	
	
} 
