var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '127.0.0.1',
	port : '3306',
	user : 'root',
	password : '123456',
	database : 'test'
});
connection.connect();
var sql = 'select * from `order`';
connection.query(sql,function(err,res){
	if(err){
		console.log(err.message);
		return;
	}
	console.log(res);
});
connection.end();