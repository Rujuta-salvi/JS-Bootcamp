//largest prime factor
function prime(num) {
  let larfact = 1;


  while (num % 2 === 0) {
    larfact = 2;
    num = num / 2;
  }

  let fact = 3;
  while (fact * fact <= num) {
    while (num % fact === 0) {
      larfact = fact;
      num = num / fact;
    }
    fact += 2;
  }

  if (num > 2) {
    larfact = num;
  }

  return larfact;
}

console.log(prime(600851475143));
