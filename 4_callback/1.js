// 콜백함수

// 제어권 위임
// 1. 실행시점
// 2. 매개변수
// 3. this


// 1. 실행시점
var callback = function() {
  console.log('1초마다 실행')
}

setInterval(callback, 1000)

// 2. 매개변수
// forEach에 정의된 스펙(규칙)에 따라 동작한다.
var arr = [1, 2, 3, 4]
var entries = []
arr.forEach(function(v, i) {
  entries.push([i, v, this[i]])
}, [10, 20, 30, 40, 50])

console.log(entries)

// 3. this
