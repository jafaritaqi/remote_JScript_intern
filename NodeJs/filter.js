//filter - return a new array, can manipulate the size of the new array(unlike map) , returns based on condition
//find - return single instance(object), returns first match, if no match , undefined


const people = [
	{name: 'bob',age: 25,position: 'developer'},
	{name: 'anna',age: 20,position: 'designer'},
    {name: 'susy',age: 30,position: 'the boss'},
    {name: 'anna',age: 35,position: 'intern'},
    {name: 'peter',age: 27,position: 'designer'},

];

//filter 
const youngPeople = people.filter((person)=>{
    // if(person.age<30){
    //     return person;
    // }

    return person.age<30;
});

console.log(youngPeople);

const developer = people.filter((person)=>person.position==="developer");

console.log(developer);

// no match
const seniorDevs = people.filter((item)=> item.position==='senior devs');

console.log(seniorDevs);

//find 
const peter = people.find((person)=> person.name==='peter');
console.log(peter);

// no match
const oldPerson = people.find((person)=> person.age>35);
console.log(oldPerson);


//multiple matches -- first match
const randomPerson = people.find((person)=>person.age<30);
console.log(randomPerson);

/**
 * 
 * difference between filter and find
 * filter returns array in this case array
 * find return an instances
 * 
 *  */
console.log(peter.position);

const anna = people.filter((person)=>person.name==='anna');
console.log(anna[0].position);
console.log(anna.position); // it returns undefined because we have not specified which item
