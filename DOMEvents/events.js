// var button = document.getElementsByTagName("button")[0];
//[0] is needed because 'button' is an array

// button.addEventListener("click", function(){
// 	console.log("CLICK!");
// });
//addEventListener listens to an action that is being performed on the page
//it takes two parameters, the first is which action is being performed
//the second is the function that should be performed once that action is acknowledged


// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul  =  document.querySelector("ul");

// // button.addEventListener("click", function(){
// // 	var li = document.createElement("li");
// // 	// li.appendChild(document.createTextNode("testing"))
// // 	// //add static 'testing' word
// // 	li.appendChild(document.createTextNode(input.value))
// // 	//input.value takes the value of the input
// // 	ul.appendChild(li);
// // });

// button.addEventListener("click", function(){
// 	if  (input.value.length > 0){
// 		//making sure the user actually puts in a value
// 		var li = document.createElement("li");
// 	// li.appendChild(document.createTextNode("testing"))
// 	// //add static 'testing' word
// 	li.appendChild(document.createTextNode(input.value))
// 	//input.value takes the value of the input
// 	ul.appendChild(li);
// 	input.value = "";
// 	//clears the value in the box 
// 	}
// });

// input.addEventListener("keypress", function(event){
// 	//whats happening to the input
// 	if  (input.value.length > 0 && event.keyCode === 13){
// 		//making sure the user actually puts in a value
// 		var li = document.createElement("li");
// 	// li.appendChild(document.createTextNode("testing"))
// 	// //add static 'testing' word
// 	li.appendChild(document.createTextNode(input.value))
// 	//input.value takes the value of the input
// 	ul.appendChild(li);
// 	input.value = "";
// 	//clears the value in the box 
// 	}
// });


// -----Better Code------

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul  =  document.querySelector("ul");

function getInputLength() {
	return input.value.length;
}

function makeListItem() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() { 
	if  (getInputLength() > 0) {
		makeListItem();
	}
}

function addListAfterEnter(event) {
	if  (getInputLength() > 0 && event.keyCode === 13) {
		makeListItem();
	}
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterEnter)

//addListAfterClick doesn't have the () after the function because it's a callback function
//a callback function  waits for an event to happen before it's performed


