"use strict";
function num(item){
    var x = Number(item);
    var y = x + " is " + typeof x;
    var z = x + " is " + typeof item;
    if(item == x){
        return y;
    }
    else{
        return z;
    }
    
}

console.log(num(true));
console.log(num(false));
console.log(num(10));
console.log(num(null));
console.log(num(undefined));
console.log(num("11"));
console.log(num("mina"));
console.log(num("1.1"));
console.log(num(""));
console.log(num(0xf));
