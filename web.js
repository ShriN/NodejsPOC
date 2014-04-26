var express = require('express');
var port = process.env.port || 1337;

var server = express();

var bodyParser = require('body-parser')

var routes = require('./routes');

server.set('views', __dirname);

server.use(bodyParser());

server.get('/', function(req,res){
	res.end('Hello World\n');
});

server.get('/static', function(req,res){
	res.sendfile('index.html');
});

server.get('/dynamic', function(req,res){
	res.render('dynamic.ejs');
});

server.post('/AddNewBuddy', routes.sayHello);

server.listen(port);