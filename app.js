var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/images", function(req, res){
   var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=HIXECXqEqbUmmHIh9ItAjyYX8a2vxHyojlXds7Qe";
   var randomNum = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
   request(url, function(error, response, body){
        if (!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("images", {parsedData: parsedData, randomNum});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server started");
});