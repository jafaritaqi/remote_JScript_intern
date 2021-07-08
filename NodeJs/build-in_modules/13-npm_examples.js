//npm -- global command, comes with node
//npm --version

//local dependency -- use it only in this particular project
//npm i <packageName>

//global dependency -- use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json -- manifest file (stores important information about project / package)
//manual approach (create package.json in the ROOT, create properties etc )
//npm init (step by step, press enter to skip)
//nmp init -y (everything defualt.)

const _ = require('lodash')

const items = [1,[2,[3,[5]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people');
console.log('hello people');


