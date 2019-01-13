"use strict";
function nan(item){
    var chekNan = isNaN(item);
    if (chekNan == true){
        return "This Item Is Not A Number";
    }
    else{
        return "This Item Is A Number";
    }
}
console.log(nan(true))