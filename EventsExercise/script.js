var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liNodeList = document.querySelectorAll("li");
var deletebtnNodeList = document.querySelectorAll(".delete-btn");

// adds a new item to the list
function createListElement() {
	//create li and button elements and cache them in variables
	var li = document.createElement("li");
	var btn = document.createElement("button");

	// give the button its classes, append its text, add event listener to make it clickable
	btn.classList.add("delete-btn", "btn", "btn-danger");
	btn.appendChild(document.createTextNode("X"));
	btn.addEventListener("click", deleteListItem);

	// append the button to the li, append the li's text, add event listener to make it clickable
	li.appendChild(btn);
	li.appendChild(document.createTextNode(" " + input.value));
	li.addEventListener("click", toggleDone);

	// append the li to the ul
	ul.appendChild(li);

	// reset the input field
	input.value = "";
}

// helper function to check input length
function inputLength() {
	return input.value.length;
}

// calls createListELement if there was input & click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// calls createListElement if there was input & 'return' key pressed
// event.keyCode 13 is return key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// toggles .done class (strikethru text)
function toggleDone(){
	this.classList.toggle("done");
}

// deletes the parent node (li)
function deleteListItem(){
	this.parentNode.remove();
}

// event listeners for adding adding items to the list
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// event listeners for pre existing list items
liNodeList.forEach(function(li){
	li.addEventListener("click", toggleDone);
});
deletebtnNodeList.forEach(function(btn){
	btn.addEventListener("click", deleteListItem);
});