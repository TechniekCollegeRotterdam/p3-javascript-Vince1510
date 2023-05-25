fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => displayCountries(data))
  .catch(error => console.log(error));

function displayCountries(countries) {
  const countriesGrid = document.getElementById('countries-grid');

  countries.forEach(country => {
    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');

    const countryFlag = document.createElement('img');
    countryFlag.classList.add('country-flag');
    countryFlag.src = country.flags.svg;
    countryCard.appendChild(countryFlag);

    const countryName = document.createElement('div');
    countryName.classList.add('country-name');
    countryName.textContent = country.name.common;
    countryCard.appendChild(countryName);

    countriesGrid.appendChild(countryCard);
  });
}
