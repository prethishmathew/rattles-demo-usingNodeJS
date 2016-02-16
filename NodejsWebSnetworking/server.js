var http = require("http");
var express = require("express");
var app = express();

//Set up the View engine in Express
app.set("view engine", "vash");

var server = http.createServer(app);

app.get("/", function(req, res) {

   // res.send("<html><body><b>From Prads Express</b></body></html>");
    res.render("vash/index", { title: "Prads Express + Vash" });
});

server.listen(3000);