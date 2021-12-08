const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

const list = ingredients.map((name) => {
  let element = document.createElement('li');
  element.classList.add('item');
  element.textContent = name;
  return element;
});
ul.append(...list);
console.log(ul)






