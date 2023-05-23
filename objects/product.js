//object
let output = document.querySelector(".output");


const person= {
    //properties
    name:'Vince',
    age:'17',
    birth:'07-07-2005',
    life:'yes',
    hobbys:'chess, kickboxing, vacation, and videogaming', 
    img: './img/image.png'
};
output.innerHTML = `
<p>${person.name}</p>
<img src="${person.img}"></img>

`;