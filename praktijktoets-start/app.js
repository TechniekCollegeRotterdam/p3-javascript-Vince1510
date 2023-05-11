document.getElementById("signUp").addEventListener("click", function () {
    signIn();
});

function showImage() {
    var element = document.getElementById("imgCheck");
    element.classList.add("sign-in-container");
}

function signIn() {
    document.getElementById("displayAreaFullName").innerHTML = "Welkom " + document.getElementById("fullNameTextBox").value;
    document.getElementById("displayAreaPhoneNumber").innerHTML = "U heeft een bevestiging ontvangen op: " + document.getElementById("phoneNumberTextBox").value;
    document.getElementById("displayAreaEmail").innerHTML = "Ter verificatie sturen wij een bericht naar: " + document.getElementById("emailTextBox").value;
    document.getElementById("title").innerHTML = "";
    document.getElementById("paragraph").innerHTML = "";
    const element = document.getElementById("form");
    element.remove();
    showImage();
}

const text = document.getElementById('text');

text.addEventListener('click', function () {
    this.textContent = 'U heeft een bevestiging ontvangen op: ';
});

const myButton = document.getElementById("signUp");