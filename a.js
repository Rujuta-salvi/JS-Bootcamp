let Array = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let div = [];

for (let i = 0; i < Array.length; i++) {
   

     Array[i]=Array[i]*3;

    if (Array[i]% 5 == 0) {
        sum=sum+Array[i];
        div.push(Array[i]); 
    }
}

console.log(sum);  
console.log(div); 
