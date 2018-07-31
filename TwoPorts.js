//loads required npm package 
var http = require("http");

//confirms port that http will run on 
var PORT1 = 7000;
var PORT2 = 7500;

//function to handle requests from browser 

function handleRequest1(request, response){

 response.end("You Are Awesome!" + request.url);

}

var server = http.createServer(handleRequest1);

server.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:%s", PORT1);
    
})
//PLEASE NOTE: Once the server is listening in Node, 
//you can type localhost:8080 in browser and console log message should appear

//function to handle requests from browser 

function handleRequest2(request, response){

    response.end("You Are A Loser!" + request.url);
   
   }
   
   var server = http.createServer(handleRequest2);
   
   server.listen(PORT2, function() {
       console.log("Server listening on: http://localhost:%s", PORT2);
       
   })
   //PLEASE NOTE: Once the server is listening in Node, 
   //you can type localhost:8080 in browser and console log message should appear