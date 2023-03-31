let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let divElement = document.createElement("div")
	divElement.style.background = "yellow"
	divElement.innerHTML = "Hello World"
	document.body.appendChild(divElement)
});