// console.log("hello script this is arshdeep singh");

// alert

// alert("press ok to play the game ")


//  var username = prompt("Give me  your username ");
//  alert("The script works " + username);



var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


   



function clickHandler (){
 outputDiv.innerText= "hbfehifvnreifjh eruif " + txtInput.value;


};

btnTranslate.addEventListener("click", clickHandler);    //this object is called document object model

// document.querySelector   : it is an API
// addEventListener    :  it is also an API

// API: application programming interface. This interface will be using applications