const userInput = document.getElementById("search");
const results = document.getElementById("results")

const triggerFetch = (keyword) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${keyword}`)
    .then(response => response.json())
    .then((data) => {
      const objects = data.words;
      objects.forEach((object) => {
        console.log(object);
        results.insertAdjacentHTML('beforeend', `<li>${object}</li>`);
      });
    });
};


userInput.addEventListener("keyup", (event) => {
  const result = userInput.value;
  triggerFetch(result);
  results.innerHTML = " ";
});
