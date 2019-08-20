//get the user input by grabbing the element by ID
var input = document.getElementById("userinput");
//get the enter button
var pressButton = document.getElementById("enter");
//get the unordered list
var ul = document.querySelector("ul");


//creating  a function for what happens when the enter button is pushed
pressButton.addEventListener("click", function(){

	//only add an item if input length is greater than 0
	if (input.value.length > 0){
	//When you  "click" the enterButton, what happens?
	//create a list  item and store it to "li"
		var li =  document.createElement("li");
		//create a button and  store it to "button"
		var button  =  document.createElement("button")

		//append the button to the list item
		li.appendChild(button);
		//append the input value to the list
		li.appendChild(document.createTextNode(input.value));
		//toggle the word to show done when done
		li.addEventListener("click", function(){
			this.classList.toggle("done");
		})

		//add a style to the button that was just created
		button.classList.add("button");
		//add a child  element to the button with the words "delete"
		button.appendChild(document.createTextNode("Delete"));
		//if the button is pushed remove the parent node
		button.addEventListener("click", function(){
			this.parentNode.remove();
		})

		//append all of li to the unordered list
		ul.appendChild(li);

		//reset the input value
		input.value = "";
	}

})

input.addEventListener("keypress", function(event){

	//only add an item if input length is greater than 0 and the keyCode type is 13
	if (input.value.length > 0 && event.keyCode === 13) {
	//When you  "click" the enterButton, what happens?
	//create a list  item and store it to "li"
		var li =  document.createElement("li");
		//create a button and  store it to "button"
		var button  =  document.createElement("button")

		//append the button to the list item
		li.appendChild(button);
		//append the input value to the list
		li.appendChild(document.createTextNode(input.value));
		//toggle the word to show done when done
		li.addEventListener("click", function(){
			this.classList.toggle("done");
		})

		//add a style to the button that was just created
		button.classList.add("button");
		//add a child  element to the button with the words "delete"
		button.appendChild(document.createTextNode("Delete"));
		//if the button is pushed remove the parent node
		button.addEventListener("click", function(){
			this.parentNode.remove();
		})

		//append all of li to the unordered list
		ul.appendChild(li);

		//reset the input value
		input.value = "";
	}

})



