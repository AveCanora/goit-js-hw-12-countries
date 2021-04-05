export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(
    response => {
      return response.json();

      //   let len = response.json();
      //   return len;
    },
  );
}
