//fibonacci series 
let a=1;
let b=1;
let c=0;
let sum=0;
while(c<4000000)
{if(c%2==0)
{
    sum+= c;
}
    c=a+b;
    a=b;
    b=c;

}
console.log(sum);