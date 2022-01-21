// 실행컨텍스트에 this binding이 있다 => 실행컨텍스트는 함수가 호출되는 순간 열린다 === this는 함수가 호출될 때 결정된다.

// this
// 1. 전역공간에서: window(browser)/global(node.js) // 런타임(js가 실행되는 환경)에 따라서 전역객체의 정보가 달라진다.
// 2. (ES5에서)함수로서 호출시: window/global
function b() {
  function c() {
    console.log(this) // 전역객체
  }
  console.log(this) // 전역객체
  c()
}
b()

var d = {
  e: function() {
    function f() {
      console.log(this) // 전역객체
    }
    f() // 함수로서 호출  // 호출한 형태만 보면 됨.
  }
}
d.e()

// 3. 메서드로서 호출시: 메서드 호출 주체(메서드명 앞)
var a = {
  b: function() {
    console.log(this) // a  // { b: [Function: b] }
  }
}
a.b()

var a = {
  b: {
    c: function() {
      console.log(this) // a.b  // { c: [Function: c] }
    }
  }
}
a.b.c()
// 대괄호 표기법으로도 메서드를 표기할 수 있다.
a.b['c']()

// obj.func()
// obj['func']()

// person.info.getName()
// person.info['getName']()
// person['info'].getName()
// person['info']['getName']()

// 메서드 내부함수에서의 우회법
var a = 10;
var obj = {
  a: 20,
  b: function() {
    console.log(this.a) //  20

    function c() {
        console.log(this.a) // 10 // 전역객체의 프로퍼티 a와 같은 개념으로 전역변수 a를 출력한다. // js설계상의 오류(?)
    }
    c()
  }
}
obj.b()


var a = 10;
var obj = {
  a: 20,
  b: function() {
    var self = this
    console.log(this.a) //  20

    function c() {
        console.log(self.a) // 10 // 전역객체의 프로퍼티 a와 같은 개념으로 전역변수 a를 출력한다. // js설계상의 오류(?)
    }
    c()
  }
}
obj.b()

// es6 arrow function: this binding을 하지 않는다. => 스코프 체이닝 상의 this에 바로 접근한다. => 상위에 있는 this를 쓴다.
var a = 10;
var obj = {
  a: 20,
  b: function() {
    console.log(this.a) //  20

    const c = () => {
        console.log(this.a) // 20
    }
    c()
  }
}
obj.b()

// 4. callback 호출시: 기본적으로는 함수 내부에서와 동일
// call, apply, bind 메소드에 대하여
// 명시적인 this 바인딩
function a(x, y, z) {
  console.log(this, x, y, z)
}

var b = {
  bb: 'bbb'
}

a.call(b, 1, 2, 3)

a.apply(b, [1, 2, 3])

var c = a.bind(b)
c(1, 2, 3)

var d = a.bind(b, 1, 2)
d(3)

// 콜백함수에서의 this
var callback = function() {
  console.dir(this) // 함수로서 호출당했으므로 전역객체
}
var obj = {
  a: 1,
  b: function(cb) {
    cb()  // 함수로서 호출  // this는 호출될 때 결정된다
  }
}
obj.b(callback)

var callback = function() {
  console.dir(this) // obj
}
var obj = {
  a: 1,
  b: function(cb) {
    cb.call(this)  // obj를 this로 명시적 binding
  }
}
obj.b(callback)


var callback = function() {
  console.dir(this) // 전역객체
}

var obj = {
  a: 1
}

setTimeout(callback, 100) // setTimeout은 this를 별도로 처리하고 있지 않다
setTimeout(callback.bind(obj), 100) // 명시적으로 obj를 this로 binding


document.body.innerHTML += '<div id="a">클릭하세요</div>'
document.getElementById('a').addEventListener(
  'click',
  function() {
    console.dir(this) // adiv#a // ddEventListener 함수가 콜백함수를 처리할 때 this는 이벤트가 발생한 타겟대상 엘리먼트로 지정
  }
)

// 정리
// 기본적으로는 함수의 this와 같다.
// 제어권을 가진 함수가 콜백의 this를 지정해둔 경우도 있다. => 이 경우에도 개발자가 this를 바인딩해서 콜백을 넘기면 이에 따른다.

// 5. 생성자함수 호출시: 인스턴스 객체
function Person(n, a) {
  this.name = n
  this.age = a
}

var roy = new Person('재남', 30)
console.log(roy.name, roy.age)