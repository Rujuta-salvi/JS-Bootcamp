// const myObject={
//     "name":"Alice",
//     "age": 25,
//     "isStudent":true,
//     "hobbies":["reading","coding"],
//     "address":{
//         "city":"New York",
//         "zipcode":"10001"
//     }
// }
// console.log(`Name: ${myObject.name}`);
// console.log(`Age: ${myObject.age}`);
// console.log(`Hobbies: ${myObject.hobbies}`);
// console.log(`City: ${myObject.address.city}`);
// console.log(`Zipcode: ${myObject.address.zipcode}`);
for (i = 1; i <= 100; i++) {
  let a = [2, 3, 4, 5, 6];
  a.push(i);
  a.map(x => x * 3)
   .filter(x => x % 5 == 0)
   .reduce((a, x) => a + x);
}

function abc(x) {
  return x * 3;
}
