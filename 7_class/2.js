// 7-2. 클래스 상속
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
  this.name = name || '이름없음';
  this.age = age || '나이모름';
  this.position = position || '직책모름';
}

// 중복
// Employee.prototype.getName = function() {
//   return this.name;
// }

// 중복
// Employee.prototype.getAge = function() {
//   return this.age;
// }

// Employee.prototype.getPosition = function() {
//   return this.position;
// }

// 아무런 프로퍼티가 없는 빈 객체를 생성하는 생성자함수. Person의 prototype만 상속받는다.
// 프로토타입 체인상에 불필요한 프로퍼티가 등장하지 않게끔 한다.
function Bridge() {}

Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;

// Employee.prototype = new Person();
// Employee.prototype.constructor = Employee;

// 순서를 Employee.prototype = new Person(); 코드 이후로 해줘야 한다.
Employee.prototype.getPosition = function() {
  return this.position;
}

var roy = new Employee('로이', 30, 'CEO');

console.dir(roy)