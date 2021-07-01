//Reduce 
//iterates, callback function
//reduces to a single value - number , array, object
//1st parameter ('acc') - total of all calculations -- accumulator = acc
//2nd parameter ('curr') - current iteration / value

const staff =[
    {
		name: 'bob',
		age: 25,
		position: 'developer',
        salary: 100
        
	},
	{
		name: 'anna',
		age: 20,
		position: 'designer',
        salary : 300
	},{
		name: 'susy',
		age: 30,
		position: 'the boss',
        salary: 400
	},
    {
        name: 'peter',
		age: 35,
		position: 'designer',
        salary: 40
    }
]

const dailyTotal = staff.reduce((total,human)=>{
console.log(total);
console.log(human.salary);
total+=human.salary;

return total;
},0)

console.log(dailyTotal);