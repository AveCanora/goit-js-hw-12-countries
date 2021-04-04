// import './js/task-1.js';
import { refs } from './js/refs.js';
import itemMenu from './templates/countries.hbs';
const debounce = require('lodash.debounce');
// console.dir(refs.inputCountry);

let nameCountry;

refs.inputCountry.addEventListener('input', debounce(getNameOfCountry, 500));

function getNameOfCountry() {
  nameCountry = refs.inputCountry.value;
  // console.log(nameCountry);
  fetchCountries(`https://restcountries.eu/rest/v2/name/${nameCountry}`);
  const markup = fetchCountries;
  refs.descrCountry.insertAdjacentHTML('beforeend', markup);
}
function fetchCountries(searchQuery) {
  fetch(searchQuery)
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country);
    })
    .catch(error => {
      console.log(error);
    });
}
