let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let mySelect = document.querySelector("#mySelect")
for (let i =0; i<countries.length; i++) {
    let option = document.createElement("option")
    option.value = countries[i] //this is not necessary I think
    option.text = countries[i]
    mySelect.appendChild(option)
}


mySelect.addEventListener("change", function(){
    let selectedOption = mySelect.options[mySelect.selectedIndex]
    alert(selectedOption.value)
})