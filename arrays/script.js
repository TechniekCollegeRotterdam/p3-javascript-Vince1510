//variabel met array herken je aan blokhaken
//array begint altijd bij 0
//opdracht1
let output = document.getElementById("text")

let winkelmand =["Bananen","Whiskey", "Chips", "Bonen", "Rijst"] ;


// opdracht3
output.innerText = "er zitten " + winkelmand.length + "producten in mijn winkelmand";
output.innerText = "uw producten zijn" + winkelmand;
output.innerText = winkelmand[3]+ "staat op de vierde plek in uw winkelmand";
//opdracht4
winkelmand[1] = "bier"

//opdracht2
// names.length;


// console.log(names)

// opdracht5
function productToevoegen(){
    winkelmand.push("cola")
    output.innerText = winkelmand;

}

// opdracht6
if (winkelmand.length >= 1) { 
    output.innerText = winkelmand;

} else{
    output.innerText = "u heeft niet genoeg producten om te tonen";
}

// opdracht7
if (winkelmand [4] == "drop"){
    output.innerText = winkelmand;
} else{
    output.innerText = "u heeft geen drop"
}

// opdracht8
output.innerText = winkelmand.join(" ");

// opdracht9
winkelmand.splice(0,2)
output.innerText = winkelmand;

// opdracht10

winkelmand.sort();
output.innerText = winkelmand;