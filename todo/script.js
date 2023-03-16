let inputField = document.getElementById("inputField")
let button = document.getElementById("addToDo")
let container = document.getElementById("toDoContainer")

button.addEventListener("click",function(){
    //aanmaken van een p element oftewel een paragraaf
    //dit zit opgeslagen in de variabel paragraph
    let paragraph = document.createElement("p")


    //de waarde van je input (dus wat je in je input typt), wordt IN
    //je paragraaf geplaatst
    paragraph.innerText = inputField.value;

    //paragraaf wordt toegevoegd aan de container
    container.appendChild(paragraph)

    //input wordt leeggemaakt nadat toegevoegd aan paragraaf
    inputField.value = "";

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-trough";
    })

    paragraph.addEventListener("dblclick", function(){
        container.removeChild(paragraph);
    })


})
