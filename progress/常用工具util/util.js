const util = require('util');


async function fn(){
	return 'hello world!';
}

const callBackFunction = util.callbackify(fn);

callBackFunction((err,ret) => {
	if(err){
		throw err;
	}
	console.log(ret);
});
