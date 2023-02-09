package simplilearn.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// whenever this exception arises i want to send 404 instead of 500 showing
@ResponseStatus(HttpStatus.NOT_FOUND)
public class TodoNotFoundException extends RuntimeException {
	
	public TodoNotFoundException(String descriptionOfException) {
		// runTimeException is our super class
		super(descriptionOfException);
	}
}
