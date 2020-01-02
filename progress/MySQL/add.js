var mysql = require('mysql');

var connection = mysql.createConnection({
	host : '127.0.0.1',
	port : '3306',
	user : 'root',
	password : '123456',
	database : 'test'
});

connection.connect();

var sql = 'insert into `order` values (DEFAULT,?,?)';
var sqlParams = [];
sqlParams.push('3');
sqlParams.push('编号9527');

connection.query(sql,sqlParams,function(err,res){
	if(err){
		console.log(err.message);
		return;
	}
	console.log(res);
});

  // 查询
var querySql = 'select * from `order`';
connection.query(querySql,function(err,res){
	if(err){
		console.log(err.message);
		return;
	}
	console.log(res);
}); 
connection.end();

