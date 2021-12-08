const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  },
];

const ul = document.querySelector('.gallery');

const list = images.map((img) => {
  let imgEl = document.createElement('img');
  imgEl.url = `${img.url}`;
  imgEl.alt = `${img.alt}`;
  imgEl.width = 400;
  imgEl.height = 250;
  let item = `<li><img src=${imgEl.url} alt=${imgEl.alt} width=${imgEl.width} height=${imgEl.height}></li>`;
  return item;
});

ul.insertAdjacentHTML('afterbegin', list);
console.log(ul);