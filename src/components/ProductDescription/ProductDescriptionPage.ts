import { BooksList } from '../../modules/books';
import './_product-description.scss';

class ProductDescriptionPage {
  data: BooksList[];
  constructor(data: BooksList[]) {
    this.data = data;
  }
  render = () => {
    const id = location.pathname.slice(1);
    const product = this.data.filter((item) => item.isbn13 == +id);
    const main = document.getElementById('main');
    const description = document.createElement('div');
    const nav = document.createElement('div');
    const descriptionBox = document.createElement('div');
    const slider = document.createElement('div');
    const imgActive = new Image();
    const img1 = new Image();
    const img2 = new Image();
    const descTextBox = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const genres = document.createElement('p');
    const price = document.createElement('p');

    nav.classList.add('product__nav');
    nav.innerHTML = '';
    nav.innerHTML = `store > ${product[0].categories} >  ${product[0].title}`;

    slider.classList.add('product__slider');
    imgActive.src = product[0].image;
    imgActive.classList.add('product__images');

    img1.src = product[0].image;
    img2.src = product[0].image2 ? product[0].image2 : '';
    img1.classList.add('product__previev');
    img2.classList.add('product__previev');
    img1.addEventListener('click', () => (imgActive.src = img1.src));
    img2.addEventListener('click', () => (imgActive.src = img2.src));

    slider.append(imgActive, img1, img2);

    h1.classList.add('product__title');
    h1.innerText = product[0].title;

    p.classList.add('product__description');
    p.innerText = product[0].description;

    genres.classList.add('product__genres');
    genres.innerText = `${product[0].categories} / ${product[0].genres}`;

    price.classList.add('product__price');
    price.innerText = `${product[0].price}$`;
    descTextBox.classList.add('product__text');
    descTextBox.append(h1, genres, p, price);
    if (main !== null) {
      main.innerHTML = '';

      console.log(this.data.filter((item) => item.isbn13 == +id));
      description.classList.add('container');
      descriptionBox.classList.add('product__box');
      descriptionBox.append(slider, descTextBox);
      description.append(nav, descriptionBox);
      main.append(description);
    }
  };
}

export default ProductDescriptionPage;

/*
реализован блок с полными данными товара (название, категория, описание, цена и т.д.) +5
присутствует кнопка добавления товара в корзину. Состояние кнопки зависит от того, 
есть ли товар в корзине. Например, товар мог быть добавлен в корзину на текущей 
странице или странице товаров и соответственно текст кнопки должен это отображать +5
присутствует кнопка быстрой покупки товара. При клике, если товара нет в корзине,
 происходит автоматическое добавление в корзину и переход на страницу корзины, 
 с уже открытым модальным окном. Если товар уже был в корзине, повторное добавление 
 не требуется +5
Страница открывается в новом окне по ссылке с id/name товара +10
страница конкретного товара имеет свой маршрут. Например, страница с товаром
 MacBook Pro открывается вне зависимости от того, посещались ли другие страницы 
 приложения +10
*/
