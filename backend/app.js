/*  ===================
    Element Labo Board - NodeJS
    By @SuperIRis for Element
    =================== */
"use strict";
var express = require("express"),
	http = require("http"),
	path = require("path"),
	config = require("./config")(),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	csrf = require('csurf'),
	mongoose = require("mongoose"),
	app = express();

app.set("views", __dirname + "/templates");
app.use(express.static(path.join(__dirname, '/../public/')));
app.engine('html', require('ejs').renderFile);
app.use(cookieParser()); // required before session.
app.use(session({ secret: 'esd', key: 'sid'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(csrf());

app.locals.staticPath = path.join(__dirname, '/../public/');

mongoose.connect("mongodb://"+config.mongo.host+":"+config.mongo.port+"/laboboard");
mongoose.connection.on("connected", function(){

	app.get("/", function(req,res,next){
		console.log("running");
	});


	http.createServer(app).listen(config.port, function(){
		console.log("MongoDB connection successful://"+config.mongo.host+":"+config.mongo.port);
		console.log("Express server listening on port "+config.port);
	});
	
});
mongoose.connection.on("error", function(){
	console.error("Mongoose error");
});

process.on("SIGINT", function(){
	mongoose.connection.close(function(){
		console.log("Mongoose disconnected");
		process.exit();
	});
});

