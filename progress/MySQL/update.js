var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	port : '3306',
	user : 'root',
	password : '123456',
	database : 'test'
});

connection.connect();

var sql = 'update `order` set `number` = ? , user_id = ? where id = ?';
var sqlParams = [];
sqlParams.push('007');
sqlParams.push('9527');
sqlParams.push('1003');

connection.query(sql,sqlParams,function(err,res){
	if(err){
		console.log(err.message);
		return;
	}
	console.log(res);
});

var querySql = 'select * from `order` where id = ?';
connection.query(querySql,'1003',function(err,res){
	if(err){
		console.log(err.message);
		return;
	}
	console.log(res);
});

connection.end();