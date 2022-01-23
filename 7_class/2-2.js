function Person(name, age) {
  this.name = name || '이름없음';
  this.age = age || '나이모름';
}

Person.prototype.getName = function() {
  return this.name;
}

Person.prototype.getAge = function() {
  return this.age;
}

function Employee(name, age, position) {
  // 메서드로서 호출  => this는 roy
  this.superClass(name, age); // 생성자 함수 내부의 this=>인스턴스=>roy=>roy.superClass('로이', 30)=>roy에 없다=>프로토타입 체이닝=>Employee.prototype.superClass = Person('로이', 30) => Person 내부의 this는 roy가 되어서 roy.name, roy.age 할당됨.
  this.position = position || '직책모름';
}

// 자주 사용하는 패턴이므로 함수화를 시켜 활용
var extendClass = (function(){
  // closure
  function Bridge() {}
  return function(Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
    Child.prototype.superClass = Parent;
  }
})();

extendClass(Person, Employee);

Employee.prototype.getPosition = function() {
  return this.position;
}

var roy = new Employee('로이', 30, 'CEO');

console.dir(roy)