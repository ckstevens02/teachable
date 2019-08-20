var database = [
	{
		username: "christina",
		password: "pw123",
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "Tired"
	},
	{
		username: "Cara",
		timeline: "Lovin' life!"
	}
];

var userNamePrompt = prompt("What's your username");
var pwPrompt = prompt("Whats your pw?");

function signIn(user, pass){
	if(user === database[0].username && pass === database[0].password){
		console.log(newsFeed)
	}
	else{
		alert("Your password or username is incorrect.")
	}
}

signIn(userNamePrompt, pwPrompt);