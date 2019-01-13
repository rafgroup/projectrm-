// rationbal operators

var x = 10;
var y = 11;

console.log(x < y);
console.log(x > y);

console.log("mina" > "bishoy");     // because for the string the ASCII code for the first char is compaired to the crosspondind char in the other word


console.log("23" >= "3")

console.log(23 < "3")

console.log("a" > 3)

console.log(Number("a"))

var v = { "Name": "mina" }
var d = { "age": "Bishoy" }
console.log(v.Name > d.age);                   // will get the vakueOf() and then compare 

console.log(true > false)

//equal and not equal

console.log(Boolean(null) == Boolean(undefined))          // in case of the operands is a Boolean

console.log("10" == 10)             //convering the string operand to a number

z = { "name": "E", "age": 69 };
t = 69
console.log(z.name == t)


console.log(null == undefined)

console.log(null == 80)

console.log(undefined == 100);

console.log(NaN == NaN);

console.log(NaN != NaN)

var n = { "Name": "mina" };
var r = { "Name": "mina" };

console.log(n.Name == r.Name);


// identically Equal and NotEqual

console.log(55 === "55");

console.log("55" !== 55);

console.log(null == undefined);

console.log(true === 10)
