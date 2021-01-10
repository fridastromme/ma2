// Question 1

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (var i = 0; i < pets.length; i++) {

    var age = pets[i].age;
    var oldEnough = pets[i].type;

    if (age >= 4) {

    console.log(oldEnough);
}


// Question 2

function logValue(argument) {
    var typeofArgument = typeof argument;

    if (typeofArgument === "number") {
    console.log(logValue);
    }

    if (typeofArgument !== "number")
    console.log("Please pass a boolean value in.")
}

logValue("This is the value of the argument.");


// Question 3

var subheading = document.querySelector("h2");
var button = document.querySelector("button");

function changeColor() {
    subheading.style.color = "blue";
    subheading.innerHTML = "Updated subheading";
}

button.onclick = changeColor;
}