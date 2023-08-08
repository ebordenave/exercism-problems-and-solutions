// window.onload = function () {
//   let fruits = ["banana", "apple", "pear"];
//   fruits.forEach(function (item) {
//     console.log(item);
//   });
// };

// this works but for some reason (node) doesn't like this
// try this in jsfiddle
const loadPokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      cb(data);
    });
};

loadPokemon(25, (pokemon) => {
  console.log(pokemon);
});
