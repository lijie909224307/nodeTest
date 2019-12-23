// 测试 server 和 route
var server = require('./server');
var router = require('./router');
server.start(router.route);