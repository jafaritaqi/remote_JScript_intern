module.exports.items = ["item1","item2"]; // Another way of exporting different objects is to directly do module.exports.variableName;

const person ={
    name: 'bob',
}

module.exports.singlePerson = person; //Because it is an object that we are exporting we can this syntax
