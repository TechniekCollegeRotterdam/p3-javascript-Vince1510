document.getElementById("signUp").addEventListener("click", showImage);

function showImage() {
    var element = document.getElementById("img");
    element.classList.add("sign-in-container");
    
}



function signIn() {
    const element = document.getElementById("form");
    element.remove();

    
    
  }
  const text = document.getElementById('text');


  
  text.addEventListener('click', function() {
    this.textContent = 'U heeft een bevestiging ontvangen op: ';
  });


  function displayValue() {
    var textBoxValue = document.getElementById("myTextBox").value;
    document.getElementById("displayArea").innerHTML = "Welkom " + textBoxValue;
  }


  function displayValue1() {
    var textBoxValue = document.getElementById("myTextBox1").value;
    document.getElementById("displayArea1").innerHTML = "U heeft een bevestiging ontvangen op: " + textBoxValue;
  }


  function displayValue2() {
    var textBoxValue = document.getElementById("myTextBox2").value;
    document.getElementById("displayArea2").innerHTML = "Ter verificatie sturen wij een bericht naar: " + textBoxValue;
  }


const myButton = document.getElementById("signUp");



function removeTextTop() {
    document.getElementById("text5").innerHTML = "";
  }

  function removeTextBottom() {
    document.getElementById("text6").innerHTML = "";
  }


