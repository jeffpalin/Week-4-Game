//completes loading js prior to running

$(document).ready(function(){

// variable for random guess number

var guessNum = Math.floor((Math.random() *100) + 19);

// runs, and updates HTMl for random computer number

$("#guessNum").text(guessNum);

	console.log(guessNum);

	var counter = 0;

// array for crystal numbers

var crystals = [];

for (i=0; i<4; i++) {
	crystals.push(Math.floor((Math.random() * 12) + 1));
}

// For each iteration, we will create an imageCrystal
		var green = $("<img>");
		var red = $("<img>");
		var blue = $("<img>");
		var purple = $("<img>");

// First each crystal will be given the class ".crystal-image".
// This will allow the CSS to take effect.
		green.addClass("crystal-image");
		red.addClass("crystal-image");
		blue.addClass("crystal-image");
		purple.addClass("crystal-image");

// Each imageCrystal will be given a src link to the crystal image
    	green.attr("src", "assets/images/green.jpg");
    	red.attr("src", "assets/images/red.jpg");
    	blue.attr("src", "assets/images/blue.jpg");
    	purple.attr("src", "assets/images/purple.jpg");

// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
		green.attr("data-crystalvalue", crystals[0]);
		red.attr("data-crystalvalue", crystals[1]);
		blue.attr("data-crystalvalue", crystals[2]);
		purple.attr("data-crystalvalue", crystals[3]);

// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
		$("#crystals").append(green);
		$("#crystals").append(red);
		$("#crystals").append(blue);
		$("#crystals").append(purple);


console.log(crystals)


//listen for click on a crystal (number)

$(".crystal-image").on("click", function() {


// Determining the crystal's value requires us to extract the value from the data attribute.
// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

// We then add the crystalValue to the user's "counter" which is a global variable.
// Every click, from every crystal adds to the global counter.

    counter += crystalValue;

// All of the same game win-lose logic applies. So the rest remains unchanged.

	alert("New score: " + counter);

	if (counter === guessNum) {
		alert("You win!");
		counter = 0;
	}	else if (counter >= guessNum) {
			alert("You lose!!");
			counter = 0;
	}

});





});