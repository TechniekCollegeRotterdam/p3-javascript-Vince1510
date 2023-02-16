
let text = document.getElementById("text")
let budget = 50;
let product = prompt();


if (budget > product){
    text.innerText ="You are good to go"
    text.style.color = "green"
}

else {
    text.innerText= "You don't have enough money";
    text.style.color = "red"
}

