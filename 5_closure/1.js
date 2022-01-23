// var outer = function() {
//   var a = 1;
//   var inner = function() {
//     console.log(++a);
//   };
//   inner();
// }
// outer();

var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  }
  return inner;
}
var outer2 = outer();
outer2()  // 2
outer2()  // 3
outer2()  // 4

// 클로저의 효용
function user (_name) {
  var _logged = true;
  return {
    get name() { return _name },
    set name(v) { _name = v },
    login() { _logged = true },
    logout() { _logged = false },
    get status() {
      return _logged ? 'login' : 'logout';
    },
  }
}

var roy = user('foo')
console.log(roy.name) // foo

roy.name = 'bar'
console.log(roy.name) // bar

roy._name = 'baz'
console.log(roy.name) // bar

roy.logout()
console.log(roy.status) // logout

roy.status = true
console.log(roy.status) // logout

// 1. 함수 종료후(user())에도 사라지지 않고 값을 유지하는 변수: _name, _logged
// 2. 외부로부터 내부 변수(_name, _logged) 보호(캡슐화): _name, _logged는 setter name과 login, logout 메서드에 의해서만 변경 가능하다.