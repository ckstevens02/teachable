var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function changeBackground(){
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	changeBackground();
}

//run the program so that background appears on first load
changeBackground();

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
button.addEventListener("click", setRandomColor);
