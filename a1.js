//const users =[{name:'Alice ',age:25},{name:'Bob ',age:30},{name:'Charlie',age:25}];
const users =[{name:'Alice ',age:25},
    {name:'Bob ',age:30},
    {name:'Charlie',age:25}];
const a=users.map(x=>x.age)
.reduce((sum, a) => sum + a, 0);
const avg = a / users.length;
console.log(avg);