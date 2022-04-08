const users=[
    {name: 'shaun',premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premiumUsers=users.filter(user=>user.premium
);

console.log(premiumUsers);
//map example 1
const prices=[20,10,30,25,15,40,80,5];
const salePrices=prices.map(price=> .5*price);
//map example 2
const products=[
    {name: 'gold star', price:20},
    {name:'mushroom', price:40},
    {name:'green shells', price:30},
    {name: 'banana skin', price: 10},
    {name:'red shells', price: 50}
];

const sale2Prices=products.map(item=>{
    if(item.price>30) return{name: item.name, price: item.price/2};
    else return  item;
})

console.log(sale2Prices);


//reduce method
const scores=[10, 20, 60, 40, 70, 90, 30];

const result=scores.reduce((accumulator, current)=>{
if (current>50)
    accumulator++;
return accumulator
}, 0);

//find method
const scores2=[10,5,0,40,60,10,20,70];
const firstHighScore=scores2.find(score=> score>50//return true makes the find stop and give score as a value
);

//sort method is destructive
const names=['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();
names.reverse;//reverses the order of them (even if unsorted)

const scores3=[10,50,20,5,35,70,45];
scores3.reverse();
scores3.sort();

console.log(scores3);//sorting them as strings not numbers

const players=[
    {name: 'shaun', score:20},
    {name: 'yoshi', score:10},
    {name: 'mario', score:50},
    {name: 'chun-li', score:30},
    {name:'luigi', score:70}
];

players.sort((a,b)=> b.score - a.score
    //{if (a.score>b.score) return -1;
    //else if (b.score>a.score) return 1
    //else return 0;}
)
console.log(players);

//method chaining
const products2=[
    {name: 'gold star', price:20},
    {name:'mushroom', price:40},
    {name:'green shells', price:30},
    {name: 'banana skin', price: 10},
    {name:'red shells', price: 50}
]
// const filtered=products2.filter(product=>product.price>20);
// const promos=filtered.map(product=>{
    // return `the ${product.name} is ${product.price/2} pounds`
// });
const promos=products2
    .filter(product=>product.price>20)
    .map(product=> `the ${product.name} is ${product.price/2} pounds` );

