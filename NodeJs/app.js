//GLOBAL - NO WINDOW!!!!


//__dirname -- path to current directory
//__filename -- file name
//require -- function to use modules (CommonJS)
//module -- info about current module (file)
//process -- info about env where the program is being executed

console.log(__dirname);

setInterval(()=>{
	console.log('Hello world');
},1000)

//to test the app go to the file directory and run node app.js