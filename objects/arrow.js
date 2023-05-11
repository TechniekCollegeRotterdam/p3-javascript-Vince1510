// //normale function
// function calculate1(a, b){

//     let answer = a * b;
//     console.log(answer);
// }
// calculate1(11 , 11);

// //arrow function
// const calculate2 = (a,b) => {
//     let answer = a * b;
//     console.log(answer);
// };
// calculate2(12 , 12);

// //naam op het scherm
// let name = "Vince";

// let text = 'Mijn naam is: ' + name;
// console.log(text);

// // //Backsticks
//  let name = 'Vince';

//  text = `Mijn naam is: ${name}`;

// // console.log(text);

// document.getElementById("output").innerText = text;
// document.querySelector("#output").innerText = text;

const marvels = ['Guardians of the galaxy', 'Black panther', 'The avengers', 'Spider-man']

const addMarvels = () => {

    marvels.push("spiderman")
};

addMarvels()

for(let marvel of marvels){
    console.log(marvel);
}