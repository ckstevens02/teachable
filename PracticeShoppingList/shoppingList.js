//get the user input by grabbing the element by ID
var input = document.getElementById("userinput");
//get the enter button
var pressButton = document.getElementById("enter");
//get the unordered list
var ul = document.querySelector("ul");

//create function for input value
function inputLength(){
	return input.value.length;
}

//create a function to check and add list item
function addListItem(){
	var li =  document.createElement("li");
		//create a button and  store it to "button"
	var button  =  document.createElement("button")

	//append the input value to the list
	li.appendChild(document.createTextNode(input.value));
	//append the button to the list item
	li.appendChild(button);
	//toggle the word to show done when done
	li.addEventListener("click", toggleList);

	//add a style to the button that was just created
	button.classList.add("button");
	//add a child  element to the button with the words "delete"
	button.appendChild(document.createTextNode("Delete"));
	//if the button is pushed remove the parent node
	button.addEventListener("click", deleteListItem);

	//append all of li to the unordered list
	ul.appendChild(li);

	//reset the input value
	input.value = "";
}

function toggleList(){
	this.classList.toggle("done");
}

function deleteListItem(){
	this.parentNode.remove();
}

function addListAfterClick(){
	if(inputLength() > 0){
		addListItem();
	}
}
function addListAfterEnter(event){
	if(inputLength() > 0 && event.keyCode === 13){
		addListItem();
	}
}
//creating  a function for what happens when the enter button is pushed
pressButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);









