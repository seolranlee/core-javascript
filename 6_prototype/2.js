// 2. 메소드 상속 및 동작 원리
function Person(n, a) {
  this.name = n;
  this.age = a;
}

// 인스턴스들이 모두 공통으로 가지는 정보들은 prototype으로 보낸다.=>메모리 용량 최적화
// 객체지향적 관점 => 사람들은 모두 나이를 먹고(setOlder), 각자의 나이를 알 수 있다.(getAge) => 일반화된 특징들은 prototype으로 설명할 수 있다.
Person.prototype.setOlder = function() {
  this.age += 1;
}

Person.prototype.getAge = function() {
  return this.age;
}

// 인스턴스들은 저마다의 고유한 정보들'만' 가지고 있으면 된다.
var roy = new Person('로이', 30)
var jay = new Person('제이', 25)

// 중복이 발생
// DRY(Don't Repeat Yourself)
// roy.setOlder = function() {
//   this.age += 1;
// }
// roy.getAge = function() {
//   return this.age;
// }
// jay.setOlder = function() {
//   this.age += 1;
// }
// jay.getAge = function() {
//   return this.age;
// }