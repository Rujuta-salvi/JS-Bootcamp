let a = [];

for (let i = 1; i <= 100; i++) {
    a.push(i);
}

let result = a
    .map(x => x * 3)
    .filter(x => x % 5 === 0)
    .reduce((sum, x) => sum + x, 0);

console.log("Sum of all 3x numbers divisible by 5:", result);
