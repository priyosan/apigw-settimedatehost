var express = require('express');
var body = require('body-parser');
var fs = require('fs');
var app = express();
app.use(body.json());

var respSukses = {
		"code":"00",
		"desc":"sukses"
}

app.get('/testhost', function(req, res){
	res.send(JSON.stringify(respSukses));
});

app.post('/postdata', function(req, res){
	fs.writeFile("data.json", JSON.stringify(req.body), function(err){
		console.log("BODY "+JSON.stringify(req.body));
		if(err) throw err;
		res.send(respSukses);
	});
});

app.get('/getdata', function(req, res){
	fs.readFile("data.json", 'utf8', function(err, data){
		if(err) throw err;
		res.send(data);
	});
});

var server = app.listen(8080, function(){
	console.log("server is listening!!");
});
