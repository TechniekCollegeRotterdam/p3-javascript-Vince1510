//object
let output = document.querySelector(".output");


const person= {
    //properties
    name:'Vince',
    age:'17',
    birth:'07-07-2005',
    life:'yes',
    hobbys:'chess, kickboxing, vacation, and videogaming', 
};
output.innerHTML = `
<p>${person.name}</p>
<p>${person.age}</p>
<p>${person.birth}</p>
<p>${person.life}</p>
<p>${person.hobbys}</p>


`
