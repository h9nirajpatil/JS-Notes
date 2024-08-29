// var x = 10; // global variable
// console.log(x);

// function foo() {
//   if (true) {
//     console.log(x);
//   }
// }
// foo();
// console.log(x);

// console.log(y)
// y = 30
// console.log(y);

function foo() {
  if (true) {
    let x = 30;
    var y = 222;
    const z = 333;
    console.log(x); // ac
    console.log(y); //ac
    console.log(z); //ac
  }
  console.log(x); // nahi
  console.log(y); //ac
  console.log(z); //nahi
}
console.log(x); // nahi
console.log(y); //nahi
console.log(z); //nahi
foo();
// console.log(x);
console.log(y);
//   console.log(z);
