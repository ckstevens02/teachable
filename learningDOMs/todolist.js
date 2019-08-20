var todos = ["clean room", "brush teeth", "exercise", "study", "eat"];

for (var i = 0; i < todos.length; i++){
	todos[i] = todos[i] + "!";
	//todos.pop()
};

//var todosLength = todos.length

var counter = 0
while (counter < 10){
	console.log(counter);
	counter++;
}
//beware of infinite loops!
var counter2 = 10
do {console.log(counter2)
	counter2--;
}while (counter2 > 0);

//forEach
todos.forEach(function(i){
	console.log(i);
})