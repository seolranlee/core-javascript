// 호이스팅

// 함수 선언문은 전체를 끌어올린다
// function a() {
//   return 'a';
// }

// var b;
// var c;

// environmentRecord

// {
//   function a() {...},
//   b: undefined,
//   c: undefined
// }

console.log(a())  // 'a'
console.log(b)  // undefined
console.log(c)  // undefined

// console.log(b())나 console.log(c()) 라고 했을 때에는 타입에러가 뜬다.

// 함수 선언문
function a() {
  return 'a';
}

var b = function bb() {
  return 'bb';
}

var c = function() {
  return 'c';
}