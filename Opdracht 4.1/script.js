let answer = document.getElementById("answer");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");


function multiply(){
answer.innerText = input1.value * input2.value;

}
function devide(){
    answer.innerText = Number(input1.value)/ Number(input2.value);

    
}
function add(){
    answer.innerText = Number(input1.value)+ Number(input2.value);

    
}
function minus(){
    answer.innerText = Number(input1.value)- Number(input2.value);


    
}