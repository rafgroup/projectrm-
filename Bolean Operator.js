// not here negate the Booleen result For the operand

console.log(Boolean());
console.log(!{});
console.log(!"");
console.log(!10);
console.log(!"mina");
console.log(!0);
console.log(!Infinity);
console.log(!null)
console.log(!NaN)
console.log(!undefined)


// if we want to get the same result as Boolean()

console.log(!!{});
console.log(!!{});
console.log(!!"");
console.log(!!10);
console.log(!!"mina");
console.log(!!0);
console.log(!!Infinity);
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

// the AND Operator

function andOperator(item1,item2){
    if (item1 == true && item2 == true ){
         return item1 && item2;
    }
    else{
        return item1 && item2;
    }
}
console.log(andOperator({},"mina"))
console.log(andOperator("mina",{}))
console.log(andOperator(null,{}));
console.log(andOperator({},{}));
console.log(andOperator(null,null))
console.log(andOperator(NaN,NaN))
console.log(andOperator(undefined,undefined))

// the OR Operator

function orOperator(item3,item4){
    if (item3 == true || false , item4 == true || false){
        return  item3 || item4;
    }
    else{
        return item3 || item4;
    }
}
console.log(orOperator({},"mina"));
console.log(orOperator("",{}))

var array = [false, "", "mina", 0, 10, null, NaN, undefined];
 function logicals() {
  var i = 0;
  while (i < array.length ) {
    console.log("the Boolean Results : " + Boolean(array[i]))
    console.log("the logical not results: " + !array[i])
    i++
  }
}
logicals() 

var x = eval(prompt("please enter the first value"));
var y = eval(prompt("please enter the second value"));
console.log("the x input is :" + x);
console.log("the y input is :" + y);

function logicalAnd(){
  return  x && y;
}


function logicalOr(){
  return   x || y;
}
console.log("the result of logical  and is : " + logicalAnd())
console.log("the result of logical Or is :  " + logicalOr())