var express = require('express');
var app = express();
var fs = require('fs');


var user = {
	"user4": {
		"name": 'mohit',
		'password': 'password4',
		'profrssion': 'teacher',
		'id': 4
	}
}

app.get('/add', function(req, res) {
	fs.readFile(__dirname + '/users.json', 'utf8', function(err, data) {
		if (err) {
			console.log(err);
		} else {
			data = JSON.parse(data);
			data['user4'] = user['user4'];
			console.log(data);
			res.end(JSON.stringify(data));
		}
	});
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('基站建立完毕,监听 http://%s:%s', host, port);
});
