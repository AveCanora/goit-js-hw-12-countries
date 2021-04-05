import fetchCountries from './js/fetchCountries.js';
import './css/styles.css';
import { refs } from './js/refs.js';
import countryOne from './templates/country-one.hbs';
import countryTen from './templates/country-ten.hbs';
const debounce = require('lodash.debounce');

let nameCountry;

refs.inputCountry.addEventListener('input', debounce(getNameOfCountry, 500));

function getNameOfCountry() {
  nameCountry = refs.inputCountry.value;
  fetchCountries(nameCountry)
    .then(renderCountry)
    .catch(error => console.log(error));
}

function renderCountry(country) {
  let numberCountries = country.length;

  if (numberCountries === 1) {
    const markup = countryOne(country);
    refs.descrCountry.innerHTML = markup;
  } else if (numberCountries <= 10) {
    const markup = countryTen(country);
    // refs.descrCountry.insertAdjacentHTML('beforeend', markup);
    refs.descrCountry.innerHTML = markup;
  }
}
