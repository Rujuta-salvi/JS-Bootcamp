const cowsay = require("cowsay");
console.log(cowsay.say({text : "I 'm  a Cow"}));
const appName ="Basic Keyword Demo";
const currentDate = 9;
const daysInWeek=7;
console.log(appName+ " " + currentDate+" "+daysInWeek);

const a=5;
console.log("The Value is:"+a);
console.log(`The value is :${a}`);

//function
function greet(name)
{
    let message=`Hello, ${name}! `;
    return message;

}
const greeting =greet("Alice");
console.log(greeting);

// loop
let counter = 0;
while(counter<3)
{
    console.log(`Loop iteration:${counter}`);
        counter +=1;
    
}
console.log("while loop finished.");

const fruits=["apple","Banana"," Cherry"];
for(let i=0; i<fruits.length; i++)
{
const fruit= fruits[i];
console.log(`Fruit at index ${i}: ${fruits}`);
}

//Conditional
let temp =25;
if(temp>30)
{
    console.log("It is Hot day!!");
}
    else if(temp >20)
    {
        console.log("Its a pleasant day!!");
    }
    else{
        console.log("Its a bit chill day!!");
    }

    // calculate area 
    function calArea(length,width=1)
    {
        return length*width;
    }
    const rectangleArea =calArea(5,10);
    console.log(`Area of a 10X5 rectangleis:${rectangleArea}`);
    const squareArea =calArea(8);
    console.log(`Area of a square with side 8 is ${squareArea}`);

    // perimeter
     function calPeri(length,width)
    {
        return 2*(length+width);
    }
    const rectArea =calArea(5,10);
    console.log(`Area of a 10X5 rectangleis:${rectArea}`);
    const sqArea =calArea(8,8);
    console.log(`Area of a square with side 8 is ${sqArea}`);

    //
    const getSum= function(a,b)
    {
        return a+b;
    }
    const sum=getSum(15,20);
    console.log(`The sum of 15 and 20"${sum}`);

    // largest prime factor number
    