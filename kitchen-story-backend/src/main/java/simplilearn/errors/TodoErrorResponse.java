package simplilearn.errors;

import java.util.Date;

public class TodoErrorResponse {
	
	private Date timeStanp;
	private String errorMessage;
	private String clientDetails;
	
	public TodoErrorResponse(Date date, String errorMessage, String clientDetails) {
		this.timeStanp = date;
		this.errorMessage = errorMessage;
		this.clientDetails = clientDetails;
	}

	public Date getTimeStanp() {
		return timeStanp;
	}

	public void setTimeStanp(Date timeStanp) {
		this.timeStanp = timeStanp;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getClientDetails() {
		return clientDetails;
	}

	public void setClientDetails(String clientDetails) {
		this.clientDetails = clientDetails;
	}
	
	
}
