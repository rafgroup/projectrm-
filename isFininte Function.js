"use strict";
function isfinite(number){
    var max = Number.MAX_VALUE;
    var min = Number.MIN_VALUE;
    if (number >= max){
        return Infinity;
    }
    else if (number <= min){
        return -Infinity;
    }
    else{
        return "the number is Between max and min"
    }
}
document.getElementById("demo").innerHTML = isfinite(10);