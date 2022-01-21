var a = 1;
function outer() {
  console.log(a); // 1. 1

  function inner() {
    // var a;
    console.log(a); // 2. undefined
    var a = 3;
  }

  inner();

  console.log(a); // 3. 1
}
outer();
console.log(a); // 4. 1