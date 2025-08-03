// 5! =5*4*3*2*1 =120=3; find for 100!
let n=100n;
function factorial(n)
 {
    
    let f=1n;
    while(n>=1n)
    {
        f=f*n;
        n=n-1n;
       
    }
return f;
 }
console.log(` Factorial : ${factorial(n)}`);
   let a=factorial(n);
   let res;
  
function add(a)
{
     let sum=0n;
    while(a>=1n){
res=a%10n;
a=a/10n;
sum=sum+res;

    }
     return sum ;
}
const addd= add(a);
console.log(` Sum of Digits of Factorial: ${addd}`);