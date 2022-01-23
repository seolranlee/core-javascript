function Person(n, a) { // 생성자 함수
  this.name = n;
  this.age = a;
}

var roy = new Person('로이', 30); // new 연산자로 instance생성: this는 인스턴스 자신을 가리킴.

var royClone1 = new roy.__proto__.constructor('로이_클론1', 10);

var royClone2 = new roy.constructor('로이_클론2', 25);

var royClone3 = new (Object.getPrototypeOf(roy)).constructor('로이_클론3', 20);

var royClone4 = new Person.prototype.constructor('로이_클론4', 15);

console.log(roy)
console.log(royClone1)
console.log(royClone2)
console.log(royClone3)
console.log(royClone4)