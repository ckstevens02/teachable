var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var button = document.querySelector("button");

function checkInputLength(){
	return input.value.length
}
function toggleDone(){
	this.classList.toggle("done");
}

function deleteListItem(){
	this.parentNode.remove();
}

function addListAfterClick(){
	if(checkInputLength()> 0){
		
		var li = document.createElement("li");
		var btn = document.createElement("button"); 

		li.appendChild(document.createTextNode(input.value));
		li.appendChild(btn);
		li.addEventListener("click", toggleDone);

		btn.classList.add("button");
		btn.appendChild(document.createTextNode("Done"));
		btn.addEventListener("click", deleteListItem);

		ul.appendChild(li);
		input.value="";
	}
}

function addListAfterPress(event){
	if(checkInputLength()> 0  && event.keyCode === 13){
		
		var li = document.createElement("li");
		var btn = document.createElement("button"); 

		li.appendChild(document.createTextNode(input.value));
		li.appendChild(btn);
		li.addEventListener("click", toggleDone);

		btn.classList.add("button");
		btn.appendChild(document.createTextNode("Done"));
		btn.addEventListener("click", deleteListItem);

		ul.appendChild(li);
		input.value="";
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterPress);