let div = document.getElementById("block")
div.addEventListener("mouseover",function(){

    const list = document.getElementById("block").classList;
    list.add("highlights");
})
div.addEventListener("mouseout",function(){

    const list = document.getElementById("block").classList;
    list.remove("highlights");
})