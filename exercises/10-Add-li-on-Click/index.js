let button = document.querySelector("#superDuperButton");
const list = document.querySelector ("#myList")
button.addEventListener("click", function() {
	//your code here
	let newLi = document.createElement("li")
	newLi.innerHTML = "Fourth element"
	list.appendChild(newLi)
});
