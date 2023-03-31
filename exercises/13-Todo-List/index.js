// Your code here


const addItem = () => {
    const input = document.querySelector("#addToDo");
    const ul = document.querySelector("#myUl");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const icon = document.createElement("i");
    
    icon.className="fa fa-trash";
    span.appendChild(icon);
    li.appendChild(li)
    li.appendChild(document.innerHTML(input.value))
    ul.appendChild(li)

    input.value="";

    icon.addEventListener("click", deleteItem)
}

const deleteItem = () => {
    const li = this.parentNode.parentNode;
    li.parentNode.removeChild(li)
}

const addButton = document.createElement("button");
addButton.innerHTML = "Add"
input.appendChild(addButton)
addButton.addEventListener("click", addItem);

const deleteButtons = document.querySelector(".fa-trash");
deleteButtons.forEach((btn) => btn.addEventListener("click", deleteItem));