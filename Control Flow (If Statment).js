var d = null;
var y =Boolean((d<1));         //boolean () function are done for the results 
console.log(y);


if (d > 1){
    console.log("d is greater than 1");
}
else{
    console.log("d is less than 1");
}



if (d > 1){
    console.log("d is greater than 1");
}
else if(d < 1){
    console.log("d is less than 1");

}
else if(d == 1){
    console.log("d is eqaual to 1");
}
else {
    console.log("nothing");
};

function ageApp() {
    var age = eval(prompt("How old are you? ", ""));
    if (age > 0 && age <= 12) {
        console.log("You pay the child's fare. ");
    }
    else if (age > 12 && age < 60) {
        console.log("You pay the regular adult fare. ");
    }
    else {
        console.log("You pay the senior fare! ");
    }
}

function Switchs () {
    var age = eval(prompt("How old are you? ", ""));
    switch (age) {
        case 51:
            console.log("age is 51");
            break;
        case 52:
            cosnole.log("age is 52");
            break;
        default:
            console.log("nothing");
    }
}

function Switche() {
    "use strict";
    var age = eval(prompt("How old are you? ", ""));
    switch (age) {
        case 50:
            break;
        case 51:
            console.log("age is 51 or 50");
            break;
        case 52:
            cosnole.log("age is 52");
            break;
        default:
            console.log("nothing");
    }
}

function Greetinge() {
    var Greeting = prompt("Please write Exprision ", "");
    var Name = "Mina";
    switch (Greeting) {
        case 'Hello' :
            console.log("Hello" + Name);
            break;
        case 'Godbay' :
            console.log("Godbay" + Name);
            break;
        default:
            console.log("nothing");
    }
}
function Age() {
    var writeAge = eval(prompt('Please enter the age', ""));
    var maxAge = 60;
    switch (true) {
        case writeAge >= maxAge:
            alert("you can be suppourted");
            break;
        case writeAge < maxAge:
            alert("you cant be suppourted");
            break;
        default:
            alert("That is Not Correct");

    }
     
}

