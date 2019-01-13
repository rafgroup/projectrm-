function numberLoop() {
    var number;
    var text = "";
    for (number = 0; number < 10; number++) {
        text += "the number is " + number + "<br>";
        document.getElementById("demo").innerHTML = text;
    }
}
numberLoop();

function NumberLoop() {
    var number = 0;
    var result = "";
    while (number < 10) {
        result += number + "<br>";
        number++;
        document.getElementById("demo2").innerHTML = result;
    }
    
}
NumberLoop();

function stringLoop(){
    var word = "mina";
    var wordLength = word.length;
    var text = "";
    for (i = 0; i < wordLength; i++){
        text += word[i] + "<br>";
        document.getElementById("demo3").innerHTML = text;
    }
    
}
stringLoop();

function arrayLoop() {
    var x = ["mina", "remon", "shaker"];
    var y = ""
    var arrayLength = x.length;
    for (i = 0; i <= arrayLength; i++) {
        y += x[i] + "<br>";
        document.getElementById("demo4").innerHTML = y;
    }
}
    
arrayLoop();

var i;
var x = Infinity;
var y;
var reg = /[a-z]+/g
for (i = 0; i < x; i++) {
  y = prompt("what is your name");
  if (y == y.match(reg)) {
    break;
  }
  else if(y != y.match(reg)){
    alert("please write  a name")
  }
}
