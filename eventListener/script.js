let btn = document.getElementById("btn")

// window.addEventListener("keydown", function(e){
//     //console.log(e.key);


//     if(e.key =='h'){
//         console.log(e.key)
//     } 
    
//     else{
//         console.log("verkeerde toets")
//     }


// });



window.addEventListener("mousemove", function(e){
    if(e.clientX == 0){
        console.log("ik ben aan de zijkant")
    }
})