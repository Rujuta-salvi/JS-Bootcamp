function factorial(n) {
  let f = 1;
  while (n >= 1) {
    f = f * n;
    n = n - 1;
  }
  return f;
}

function digitSum(num) {
  let sum = 0;
  while (num >= 1) {
    let res = num % 10;
    sum += res;
    num = Math.floor(num / 10);
  }
  return sum;
}

let n = 5; // You can change this to a small number like 20
let fact = factorial(n);
console.log(`Factorial of ${n} is ${fact}`);
console.log(`Sum of digits of ${n}! is ${digitSum(fact)}`);
