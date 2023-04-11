const close = document.querySelector(".closebtn");

window.addEventListener("mousemove", function(e){
  
  if (e.clientX == 0) {
    document.getElementById("mySidenav").style.width = "100%";
  }

  close.addEventListener('click', function(){
    document.getElementById("mySidenav").style.width = "0%";

  })

})