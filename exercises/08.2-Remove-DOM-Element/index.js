let list = document.querySelector("#parentLi");
let childs = list.childNodes[3];  
console.log(childs)
list.removeChild(childs);