// do while loop
function doWhile() {
    var i = 0;
    var text = "";
    do {
        text += "<br> mina";
        i++;
    } while (i < 10);

    document.getElementById("demo").innerHTML = text;
}

function validation() {
    "use strict";
    var Name = "";
    var Telephone = 0;
    do {
        Name = prompt("Please Enter A Name");
            if (Name === "") {
                console.log("Please enter your name");
            }
        }
        while (Name === "");

    do {
        Telephone = Number(prompt("Please Enter The Phone Number"));
        if (Telephone === "") {
            console.log("Please Inter A Valid Number");
        }
    }
    while (Telephone === "");
    }
validation();

