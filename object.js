var person = new Object();
person.name = "mina";
person.age = 25;
var x = person.hasOwnProperty("name");
var y = person.isPrototypeOf(person);
var z = person.propertyIsEnumerable("age");
var d = person.name.toLocaleString();
var t = person.age.toString();
var i = person.valueOf();
console.log(x); 
console.log(y);
console.log(z);
console.log(d);
console.log(t)
console.log(i)