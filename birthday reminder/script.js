//id ophalen vanuit de html
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('container');
  const countElement = document.getElementById('count');
  const clearBtn = document.getElementById('clearBtn');
  let data = [];

  //data vanuit de json op het scherm laten zien
  function displayData() {
    container.innerHTML = '';
    countElement.textContent = data.length;

    data.forEach(person => {
      const personElement = document.createElement('div');
      personElement.classList.add('person');
      personElement.innerHTML = `
      <div class="card">
        <img class="img" src="${person.image}">
        <h3>${person.name}</h3>
        <p>Age: ${person.age}</p>
      </div>      
      `;
      container.appendChild(personElement);
    });
  }

  //eventlistener voor de clear button
  clearBtn.addEventListener('click', () => container.innerHTML = '');

  //Data ophalen vanuit de jason
  fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      displayData();
    });
});