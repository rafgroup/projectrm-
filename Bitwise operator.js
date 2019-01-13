var z = parseFloat(prompt("please enter a number"));
var t = parseFloat(prompt("please enter a number"));
function bitwizeAnd(){
  var Notz = ~z;
  var Nott = ~t
  var And = z & t;
  var Or  = z | t;
  var XOR = z ^ t;
  if (z <= 100 && t <= 100){
    console.log(z);
    alert(Notz);
    console.log(z);
    console.log(Notz)
    alert(Nott);
    console.log(t);
    console.log(Nott);
  }
  else if(z >= 100 && t <= 150){
    console.log(z);
    console.log(t);
    alert (And);
    console.log("the result: " + And);

  }
  else if(z >=150 && t <= 200){
    console.log(z);
    console.log(t);
    alert(Or);
    console.log("the result: " + Or)
  }
  else if(z >= 200 && t <= 400){
    console.log(z);
    console.log(t);
    alert(XOR);
    console.log("the result: " + XOR)
  }
}
bitwizeAnd();

var shift = parseFloat(prompt("please enter a number"));
var shiftAmount = parseFloat(prompt("Please enter the amount of shift"))
console.log( "the amount input: " + shift);
console.log("the Shift Value : " + shiftAmount );
function leftShift(){
  var booolean = Boolean(shift);
  var newAmount  = null;
  if (booolean == true){
    newAmount = shift << shiftAmount;
    alert (newAmount);
    console.log("the left shift result: " + newAmount);
  }
}
leftShift()

function rightShift(){
  var booolean = Boolean(shift);
  var newAmount  = null;
  if (booolean == true){
    newAmount = shift >> shiftAmount;
    alert (newAmount);
    console.log("the right shift result: " + newAmount);
  }
}
rightShift()

function urightShift(){
  var booolean = Boolean(shift);
  var newAmount  = null;
  if (booolean == true){
    newAmount = shift >>> shiftAmount;
    alert (newAmount);
    console.log("the unsigned right shift result: " + newAmount);
  }
}
urightShift()