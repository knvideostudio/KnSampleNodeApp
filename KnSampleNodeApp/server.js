// Entry Point of Web Site App
// KnSampleNodeApp
// Description: Sample app KnSampleNodeApp using NodeJS, Express, and MongoDB
// Author: Kriss Nickov
// Web Site: www.kncode.us
// Initial Date: Feb 11, 2017
// 
// ----------------------------------------------------------------------------------------------------------

var http = require("http");

var express = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

var controllers = require("./controllers");

var app = express();

// parse urlencoded request bodies into req.body
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// use cookies parser
app.use(cookieParser());

app.use(session({
    secret: 'mySecretPassword',
    resave: false,
    saveUninitialized: true
}));

// set the flash message
app.use(flash());

// Setup the View Engine
app.set("view engine", "vash");

// set the public static recourse folder
app.use(express.static(__dirname + "/public"));

// map the routes
// if you miss the 
// Problem while rendering template at line 10, character 0. Original message: Cannot read property 'forEach' of undefined.
controllers.init(app);


app.get("/", function (req, res) {
    res.render("index", { title: "Welcome to KnSampleNodeApp NodeJS web Sample" });
});

var server = http.createServer(app);
server.listen(process.env.PORT || 8080);
