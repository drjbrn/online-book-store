import { books, BooksList } from '../../modules/books';
import { ProductInCart, SummaryCart } from './render-cart';
import { renderModal } from '../ModalWindow/modal';
import {
  checkName,
  checkPhone,
  checkAddress,
  checkMail,
  checkDate,
  checkCVV,
  checkNumberCard
} from '../ModalWindow/check-input';

window.addEventListener('click', function (event) {
  const target = event.target as HTMLElement;
  const addToCartBtnClass = 'card__btn_shop';
  if (target.closest(`.${addToCartBtnClass}`)) {
    const addToCartBtn = target.closest(`.${addToCartBtnClass}`);
    addToCart(addToCartBtn?.getAttribute('data-id') || '');
  }
  if (target.classList.contains('count__up')) {
    const parentElement = target.closest('.product');
    changeProductCount(parentElement?.getAttribute('data-product-id') as string, 'plus');
  }
  if (target.classList.contains('count__down')) {
    const parentElement = target.closest('.product');
    changeProductCount(parentElement?.getAttribute('data-product-id') as string, 'minus');
  }
  if (target.classList.contains('summary__btn')) {
    const modalOpen = this.document.querySelector('.modal');
    modalOpen?.classList.add('open');
    closeModal(modalOpen as HTMLElement);
    checkInputInModal();
  }
});

interface cartList {
  [index: number]: BooksList;
  numberOfUnits: number;
}

const cart: cartList[] = JSON.parse(localStorage.getItem('Cart') as string) || [];
const countInCart = document.querySelector('.header__button-total') as HTMLElement;
console.log(cart);

function addToCart(id: string) {
  if (cart.some((item) => item[0].isbn13 === Number(id))) {
    console.log('Already in cart');
  } else {
    const book = books.filter((item) => item.isbn13 === Number(id));
    cart.push({
      ...book,
      numberOfUnits: 1
    });
  }
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem('Cart', JSON.stringify(cart));
  const cartItems = JSON.parse(localStorage.getItem('Cart') as string);
  const cartCount = cartItems.length;
  countInCart.innerHTML = cartCount;
  localStorage.setItem('cartCount', JSON.stringify(cartCount));
}

function countProductInCart() {
  if (JSON.parse(localStorage.getItem('cartCount') as string)) {
    const countItemsInCart = JSON.parse(localStorage.getItem('Cart') as string);
    const count = countItemsInCart.length;
    countInCart.innerHTML = count;
  }
}
countProductInCart();

const btnBasket = document.querySelector('.button__cart') as HTMLButtonElement;
const main = document.querySelector('.main') as HTMLElement;
const sectionCart = document.createElement('section');
sectionCart.classList.add('cart', 'container');
const cartProductList = document.createElement('div');
cartProductList.classList.add('cart__products');

btnBasket.addEventListener('click', function () {
  main.innerHTML = '';
  renderCart();
});

export function renderCart() {
  main.innerHTML = '';
  sectionCart.innerHTML = '';
  cartProductList.innerHTML = '';
  const modalInCart = new renderModal();
  main.append(sectionCart, modalInCart.render());

  const booksCount: number[] = [];
  const booksTotalPrice: number[] = [];
  let count = 0;
  let totalPrice = 0;
  cart.forEach((elem) => {
    booksCount.push(elem.numberOfUnits);
    count = booksCount.reduce((acc: number, elem: number) => acc + elem);
    booksTotalPrice.push(elem.numberOfUnits * elem[0].price);
    totalPrice = Number(booksTotalPrice.reduce((acc: number, elem: number) => acc + elem).toFixed(2));
  });

  const basket = new SummaryCart(count, totalPrice);
  sectionCart.append(basket.renderSummary(), cartProductList);

  cart.forEach((item) => {
    const cartProd = new ProductInCart(item[0], item.numberOfUnits, cart.indexOf(item) + 1);
    cartProductList.append(cartProd.renderCart());
  });
}

function changeProductCount(id: string, action: 'plus' | 'minus') {
  cart.forEach((elem, index: number) => {
    if (elem[0].isbn13 === Number(id)) {
      if (action === 'plus' && elem.numberOfUnits < elem[0].stock) {
        ++elem.numberOfUnits;
      }
      if (action === 'minus') {
        --elem.numberOfUnits;
        if (elem.numberOfUnits <= 0) {
          cart.splice(index, 1);
        }
      }
    }
  });
  updateLocalStorage();
  renderCart();
}

function closeModal(modal: HTMLElement) {
  const closeIcon = document.querySelector('.modal__close');
  closeIcon?.addEventListener('click', function () {
    modal.classList.remove('open');
  });
}

function checkInputInModal() {
  const inputName = document.querySelector('#personal-name') as HTMLInputElement;
  const spanName = document.querySelector('.error__name') as HTMLSpanElement;
  inputName?.addEventListener('input', function () {
    checkName(inputName, spanName);
  });

  const inputPhone = document.querySelector('#personal-phone') as HTMLInputElement;
  const spanPhone = document.querySelector('.error__phone') as HTMLSpanElement;
  inputPhone?.addEventListener('input', function () {
    checkPhone(inputPhone, spanPhone);
  });

  const inputAddress = document.querySelector('#personal-address') as HTMLInputElement;
  const spanAddress = document.querySelector('.error__address') as HTMLSpanElement;
  inputAddress?.addEventListener('input', function () {
    checkAddress(inputAddress, spanAddress);
  });

  const inputMail = document.querySelector('#personal-mail') as HTMLInputElement;
  const spanMail = document.querySelector('.error__mail') as HTMLSpanElement;
  inputMail?.addEventListener('input', function () {
    checkMail(inputMail, spanMail);
  });

  const inputNumCard = document.querySelector('#card-number') as HTMLInputElement;
  const logoCard = document.querySelector('.credit-card__logo') as HTMLImageElement;
  const spanNumCard = document.querySelector('.error__number') as HTMLInputElement;
  inputNumCard?.addEventListener('input', function () {
    checkNumberCard(inputNumCard, logoCard, spanNumCard);
  });

  const inputDateCard = document.querySelector('#card-expiration') as HTMLInputElement;
  const spanDateCard = document.querySelector('.error__date') as HTMLInputElement;
  inputDateCard?.addEventListener('input', function () {
    checkDate(inputDateCard, spanDateCard);
  });

  const inputCVV = document.querySelector('#CVV') as HTMLInputElement;
  const spanCVVCard = document.querySelector('.error__CVV') as HTMLInputElement;
  inputCVV?.addEventListener('input', function () {
    checkCVV(inputCVV, spanCVVCard);
  });

  const btnSubmit = document.querySelector('.modal__btn') as HTMLButtonElement;
  const form = document.querySelector('.modal__content') as HTMLFormElement;
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      inputName.classList.contains('personal-info__input_valid') &&
      inputPhone.classList.contains('personal-info__input_valid') &&
      inputAddress.classList.contains('personal-info__input_valid') &&
      inputMail.classList.contains('personal-info__input_valid') &&
      inputCVV.classList.contains('credit-card__input_valid') &&
      inputDateCard.classList.contains('credit-card__input_valid') &&
      inputNumCard.classList.contains('credit-card__input_valid')
    ) {
      form.classList.add('modal__accept');
      form.innerHTML = `Thank you! <br> Your order is accepted!`;
      setTimeout(() => {
        main.innerHTML = '';
        localStorage.clear();
        //create new catalog page
      }, 3000);
    } else {
      alert('You must written on all fields');
    }
  });
}
