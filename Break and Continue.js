var x = 0;
var y;
var z;
function validation() {
    label: while (x < Infinity) {
        y = eval( prompt("please enter a name",""));
        if (y === "abcdefgh") {
            break;
        }
        if (y === true) {
            z = eval(prompt("please enter a number"));
        }
        else {
            alert("wornd input");
            continue label;
        }
    }
  
}
validation()


