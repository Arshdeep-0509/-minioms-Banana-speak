// console.log("hello script this is arshdeep singh");

// alert

// alert("press ok to play the game ")


//  var username = prompt("Give me  your username ");
//  alert("The script works " + username);



var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickHandler (){

    console.log("clicked");
    console.log("input" , txtInput.value);

};

btnTranslate.addEventListener("click", clickHandler);

// document.querySelector   : it is an API
// addEventListener    :  it is also an API

// API: application programming interface. This interface will be using applications