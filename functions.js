 function sayHi(name,message){
  alert ("hello " + ", " + name +" "+ message);
}
sayHi("mina" , "haw are you?")*/ 

 function sum(num1, num2){
  return num1 * num2;
  alert("that is wrong")
}
var x = sum(10,15)
 console.log(x) */


function diff(){
  var x = eval(prompt("please enter 1 number"));
  var y = eval(prompt("please enter 2 number"));
  if (x<y){
    console.log (x + " is less than " + y);
  }
  else{
    console.log(y + "is the greater");
  }
}
diff()

function diff(num1,num2){
  if(num1<num2){
    return num2 - num1;
  }
  else{
    return num1 - num2;
  }
}

var x = diff(10,120)
console.log(x)

function sayHi(){
  alert ("hello " + arguments[0] +", " + "you are " + arguments[1]);
  console.log(arguments.length);
}
console.log(sayHi("mina",12,"remon"))

function add(){
  if(arguments.length == 1){
    alert(arguments[0] + 10);
  }
  else if(arguments.length == 4){
    alert(arguments[0] + arguments[1] + arguments[2] + arguments[3]);
  }
}
add(20,30,40,50);

 function toAdd(num1,num2){        //argumnets object can be used with named argumnets
  if(arguments.length == 1){
    alert(num1 + 10);
  }
  else if(arguments.length == 2){
    alert(num1+arguments[1]);
  }
}
toAdd(10,10)
                                  
function toAdd(num1,num2){
  "use strict";      
  arguments[1] = 10;                      
  alert(arguments[0] + num2 );
}

function add(num1,num2){
  alert(num1 + num2);
}
function add(num1,num2,num3){
  alert(num1 + num2+ num3)
}
add(10,15)
