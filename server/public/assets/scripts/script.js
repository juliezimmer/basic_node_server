$(document).ready(function(){
    console.log("This works"); 
    $.ajax ({
        type: "GET",
        url: "/kittens",
        success: function(data){ //the res is the data the server is getting for the //client
            console.log(data);
        }
    })
});

console.log("This works");
// same as client.js file


