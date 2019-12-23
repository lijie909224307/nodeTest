/* 
// 异步
var fs = require('fs');
fs.readFile('ceshi.txt',function(err,data){
	if(err){
		return console.log(err.stack);
	}
	console.log(data.toString());
});
console.log('程序执行结束!');
 */

// eventEmitter
var events = require('events');
var computer = new events.EventEmitter();
let login = function(){
	console.log('登录进来了');
}
let lose = function(){
	console.log('掉线重连中....');
}
let exit = function exitF(){
	console.log('退出了');
}
let open = function(){
	console.log('电脑开机了');
}


computer.setMaxListeners(2);
computer.once('playGame',open);	// 单次监听器,最多只会触发一次
computer.on('playGame',login);
computer.on('playGame',lose);
computer.on('playGame',exit);

var lis = computer.listeners('playGame');	// 指定事件的监听器数组
console.log(lis);

console.log(events.EventEmitter.listenerCount(computer,'playGame'));

setInterval(function(){
	computer.emit('playGame');
	computer.removeListener('playGame',exit);	// 移除事件
},1000);



