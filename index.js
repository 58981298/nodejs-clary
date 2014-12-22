var express = require('express');
var server = express();

server.get('/', function(req, res){
	res.send('Can i help you? 20141223');
})

server.listen('80');
console.log('listen to 80');