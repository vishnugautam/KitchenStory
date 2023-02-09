package simplilearn.errors;

import java.util.Date;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


// it becomes a centralized exception handler
@RestControllerAdvice
// if we extend the class with ResponseEntityExceptionHandler
public class CustomizedTodoErrorMessageHandler extends ResponseEntityExceptionHandler{
	
	// in your exception whenever an exception arise this methis has to be invoked 
	@ExceptionHandler (value = Exception.class)
	public final ResponseEntity handleAllExceptionInTodoApplication(Exception e,WebRequest webRequest) {
		
		
		TodoErrorResponse todoErrorResponse =
				new TodoErrorResponse(new Date(), e.getMessage(), webRequest.getDescription(true));
		
		return new ResponseEntity(todoErrorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	// ResponseEntity which is trying to send that particular customized message with an error code
	@ExceptionHandler (value = TodoNotFoundException.class)
	public final ResponseEntity handleTodoNotFoundException(Exception e,WebRequest webRequest) {
		
		
		TodoErrorResponse todoErrorResponse =
				new TodoErrorResponse(new Date(), e.getMessage(), webRequest.getDescription(true));
		
		return new ResponseEntity(todoErrorResponse, HttpStatus.NOT_FOUND);
		
	}
	
	@Override
	protected ResponseEntity handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
	
		TodoErrorResponse todoErrorResponse =
				new TodoErrorResponse(new Date(), "invalid information", ex.getBindingResult().toString());
		
		return new ResponseEntity(todoErrorResponse, HttpStatus.BAD_REQUEST);
	}
}
