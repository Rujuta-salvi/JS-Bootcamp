//find sum of numbers below thousand divisible by 3or 5
let sum=0;
for(let i=1;i<=1000;i++)
{
    if((i%3==0)||(i%5==0))
    {
        sum+=i;
    }
}
console.log("Sum of numbers below thousand divisible by 3 or 5 :"+ sum);