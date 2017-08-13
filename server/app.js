//first step is always to require express. 
var express = require("express");

//initialize express
var app = express();
var path = require('path');
var index = require("./routes/index");

//set a port for the application
app.set("port", process.env.PORT || 3000);  

app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("app listenting on port:" , app.get("port"));
});