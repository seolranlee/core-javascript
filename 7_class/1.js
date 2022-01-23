// 7-1. Class
// Class: 어떤 공통된 속성이나 기능을 정의한 추상적인 개념
// instance: 이 클래스에 속한 객체

// 생성자 함수
function Person(name, age) {
  this._name = name;
  this._age = age;
}

// static method
Person.getInformation = function(instance) {
  return {
    name: instance._name,
    age: instance._age
  }
}

// (prototype) method
Person.prototype.getName = function() {
  return this._name;
}

// (prototype) method
Person.prototype.getAge = function() {
  return this._age;
}

var roy = new Person('로이', 30)

console.log(roy.getName())  // 로이
console.log(roy.getAge()) // 30

console.log(roy.getInformation(roy))  // error
// instance가 아닌 생성자 함수에서 직접 접근해야 한다.
console.log(Person.getInformation(roy))  // {name: '로이', age: 30}
