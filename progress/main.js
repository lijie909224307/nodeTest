// 暴露属性或者方法
/* var Hello = require('./hello');
console.info(Hello.world());
 */

// 暴露对象
var Hello = require('./hello');
var hello = new Hello();
hello.setAge(26);
hello.setName('lijie');
hello.show();

console.log(__filename);	// 返回当前正在执行的脚本的文件名
console.log(__dirname);	// 返回当前执行脚本所在的目录



// var s = setTimeout(function(){
// 	console.log('eeeeeeeee');
// },1000);

var a = 1;
var i = setInterval(function(){
	console.log(a++);
	if(a>20){
		clearInterval(i);
	}
},50);

console.log('Hello world'); 
console.log('byvoid%diovyb'); 
console.log('byvoid%diovyb', 1991); 
