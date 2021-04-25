var express = require("express");
 
//use the application off of express.
var app = express();

//define the route for "/"
app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});
app.use("/static", express.static('./static/'));
//start the server
app.listen(8080);