Application functionality: delete a resource based on id

HTTP METHOD : DELETE 
URI: http://localhost:8080/users/vishnu/todos

Spring Boot
-------------------------------------------------------------------------------
Application functionality: create a new resource 

HTTP METHOD : POST (NOT IDEMPOTENT) - change the state of the application
URI : http://localhost:8080/users/vishnu/todos

Request Body : 
{
  "username": "Vishnu",
  "description": "Learn to fly",
  "done": false
}

Spring Boot ( Response )

Status Code : 201 ---> CREATED
location : URI  ( Response Header ) to the client 


--------------------------------------------------------------------------------------
Application functionality: Get particular 'todo' with id

HTTP METHOD : GET (IDEMPOTENT)
URI : http://localhost:8080/users/vishnu/todos/1

Spring Boot rest :
@GetMapping (path = "/users/{username}/todos/{id}")


--------------------------------------------------------------------------------------
Application functionality : Get all todos

HTTP METHOD : GET
URI: http://localhost:8080/users/vishnu/todos

Spring boot provide:
@GetMapping - useful for http method called GET
@GetMapping (path ="URI")

@GetMapping (path = "/users/{username}/todos")
{username} - URI template or placeholder eg: Vishnu, Vinod, Samarth etc

URI template value should be binded to method parameter
@PathVariable

format of data is REST, it can be json, xml 
Representation of state,
now we are representating our data as json like,
  {
"id": 1,
"username": "Vishnu",
"description": "Learn to dance",
"targetDate": "2022-11-20T15:15:29.269+00:00",
"done": false
},

-----------------------------------------------------------------------------------------


