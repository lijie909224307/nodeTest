var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	port : '3306',
	user : 'root',
	password : '123456',
	database : 'test'
});

connection.connect();

var sql = 'delete from `order` where id = ?';

connection.query(sql,'1010',function(err,res){
	if(err){
		console.log(err.message);
		return;
	}
	console.log(res);
});

var querySql = 'select * from `order`';
connection.query(querySql,function(err,res){
	console.log(res);
});

connection.end();