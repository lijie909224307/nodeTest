
// 暴露 属性或者方法
/* 
var age = 18;
exports.world = function(){
	console.log('hello World!'+age);
}
 */


// 暴露 对象
function Person(){
	var age = 0;
	var name = '';
	
	this.setAge = function(_age){
		age = _age;
	}
	this.setName = function(_name){
		name = _name;
	}
	this.getAge = function(){
		return age;
	}
	this.getName = function(){
		return name;
	}
	this.show = function(){
		// console.log('hello everyBody,I am '+this.getName()+',I am'+this.getAge()+' years old.');
		console.log(`hello everyBody,I am ${this.getName()} ,I am ${this.getAge()} years old.`);
	}
}
module.exports = Person;	// 输出