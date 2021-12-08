const categories = document.querySelectorAll('.item');
console.log('Number of categories: ', categories.length);

categories.forEach((i) => console.log('Category :', i.firstElementChild.textContent, 'Elements :', i.lastElementChild.children.length))
