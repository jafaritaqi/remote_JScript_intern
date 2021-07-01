const people = [
	{
		name: 'bob',
		age: 25,
		position: 'developer'
	},
	{
		name: 'anna',
		age: 20,
		position: 'designer'
	},{
		name: 'susy',
		age: 30,
		position: 'the boss'
	},

];

/*
Map method

.map is a Quokka.js - Extension
return a new array
does not change the size of original array (unlike filter)
uses values from original array when making new one

*/



/*
Example one : 

const ages = people.map(function manipulatePeople(){})
const ages2 = people.map(()=>{}); 
console.log(ages);
console.log(ages2);

//.map method iterates among array of people that's why we see an array of 3 undefined as an output of console.log 
//why undefined? because we are not returning anything from our function
//ages is old ways of using a normal function keyword
//ages2 is new ways which is called arrow function

*/





/*
Example two : 

const ages3 = people.map(function manipulatePeople(person){
	console.log(person.age);
}) //semicolon is optional in JavaScript that's why we don't get any error but it is good practice to always close our line of code with a semicolon 

const ages4 = people.map((person)=>{
	console.log(person.age);

});

//If we look at the output of our console we can see that we actually have access to every item of our array no matter which method we use.

*/



/* 

Example three: 

// NOW Let's get the value of our ages returned using map method.
*/

const realAges = people.map((person)=>{
	return person.age*2;
});

console.log(realAges); //[50, 40, 60]

// since we are using arrow function we can get rid of return and curly brackets to make our code shorter as below and we would still have the same functionality but if we were to have more functionality on our arrow functions we would still need the use of curly brackets
// *** The below line is the same as realAges above

const realAges2 = people.map((person)=> person.age*2);
console.log(realAges2);//[50, 40, 60]

//We can also use the reference inside our map as below

const getAges = (person)=> person.age*2;


const realAges3 = people.map(getAges);
console.log (realAges3);//[50, 40, 60]

//Now let's construct object instead of accessing a property

const newPeople = people.map(item =>{
	return {
		firstName: item.name.toUpperCase(),
		oldAge: item.age + 20,
	};
});

console.log(newPeople)//?

const names = people.map((person)=>`<h2>${person.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML = names.join(' '); 


