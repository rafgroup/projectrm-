function WhileLoop() {
    i = 0;
    var word = "mina";
    var text = "";
    while (i <= 10) {
        text += word + "<br>";
        i++;
    }
    document.getElementById("demo3").innerHTML = text;
}
WhileLoop();
function Loop(){
    var word = "shaker";
    var textLength = word.length;
    var i = 0;
    var t = "";
    while (i < textLength) {
        t += word[i] + "<br>";
        i++;
    }
    document.getElementById("demo").innerHTML = t;
}

Loop();

function arrayLoop() {
    var Names = ["mina", "remon", "shaker"];
    var i = 0;
    var x = "";
    while (i < Names.length) {
        x += Names[i]+ "<br>";
        i++;
    }
    document.getElementById("demo2").innerHTML = x;
}
arrayLoop();

function nameValidation() {
 var x = prompt("please enter a value");
 var i = 0;
 var regex = /^[0-9]+$/;

 while (i < Infinity) {
  if (x === "abcdefghi") {
   break;
  } else if (!x.match(regex)) {
   break;
  } else {
   alert("please enter a valid name")
   x = prompt("please enter a value")
  }
  i++;
 }
}
nameValidation();