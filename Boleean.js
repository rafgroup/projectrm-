"use strict";

function bool(item){
    var x = Boolean(item);
    var y = "This " + item + " Converted into Boolean ";
    var z = "This " + item + " Cant Be Converted into Boolean";
    if(x == true){
        return  y;
    }
    else{
        return z;
    }
}

console.log(bool(undefined));
console.log(bool(null));
console.log(bool(false))
console.log(bool(""));
console.log(bool(0));
console.log(bool(true));
console.log(bool("mina"));
console.log(bool("1"));
