//GLOBAL - NO WINDOW!!!!


//__dirname -- path to current directory
//__filename -- file name
//require -- function to use modules (CommonJS)
//module -- info about current module (file)
//process -- info about env where the program is being executed
/*
console.log(__dirname);

setInterval(()=>{
	console.log('Hello world');
},1000)
*/

//CommonJS, Every file in Node is module (by defualt)
//Modules - Encapsulated Code (Only share minimum)

const name = require ('./4-names');
const sayHi = require('./5-utils');
 const data = require('./6-alternative-flavor');
require('./7-mind-grenade');


/* sayHi("Susan!");
sayHi(name.john);
sayHi(name.peter); */