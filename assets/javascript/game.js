$(document).ready(function(){





function guessNum () {
	Math.floor((Math.random() *100) + 19);
}
function crystalNum () {
	Math.floor((Math.random() *6) + 1);
}

//pulls the randomNum into HTML

document.querySelector("#guessNum").innerHTML = guessNum();

//listen for click on a crystal (number)

//
$("#first").on("click", function() {

console.log("first");
});

$("#second").on("click", function() {

console.log("second");
});

$("#third").on("click", function() {

console.log("third");
});

$("#fourth").on("click", function() {

console.log("fourth");
});





});