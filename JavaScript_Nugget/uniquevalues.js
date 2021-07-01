//Unique values

const menu=[
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'egg',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
]
const categories = ['all',...new Set(menu.map((item)=>item.category))];

console.log(categories);


//map - get all instances
//new Set - narrow down
//['all',...] = turn it back to array

const reuslt = document.querySelector('result');
result.innerHTML = categories.map((category)=>{
    return `<button>${category} </button>`
}).join('');