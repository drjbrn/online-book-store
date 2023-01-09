import { BooksList } from '../../modules/books';

export class ProductInCart {
  title: string;
  authors: string;
  image: string;
  rating: number;
  isbn13: string | number;
  stock: number;
  count: number;
  price: number;
  numItems: number;

  constructor(product: BooksList, count: number, numItems: number) {
    this.title = product?.title;
    this.authors = product?.authors;
    this.image = product?.image;
    this.rating = product?.rating;
    this.isbn13 = product?.isbn13;
    this.stock = product?.stock;
    this.count = count;
    this.price = product?.price;
    this.numItems = numItems;
  }

  renderCart() {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
    productCard.dataset.productId = `${this.isbn13}`;

    //span for count items in cart
    const productNum = document.createElement('span');
    productNum.classList.add('product__number');
    productNum.innerHTML = `${this.numItems}`;

    //photo of product
    const wrapPhotoProduct = document.createElement('div');
    wrapPhotoProduct.classList.add('product__img');

    const photoProduct = document.createElement('img');
    photoProduct.classList.add('product__img');
    photoProduct.src = this.image;
    photoProduct.alt = this.title;
    wrapPhotoProduct.append(photoProduct);

    //wrap for desc
    const descWrap = document.createElement('div');
    descWrap.classList.add('product__desc');

    const titleProduct = document.createElement('h3');
    titleProduct.classList.add('product__title');
    titleProduct.innerHTML = this.title;

    const authorsProduct = document.createElement('h4');
    authorsProduct.classList.add('product__authors');
    authorsProduct.innerHTML = this.authors;

    const ratingProduct = document.createElement('p');
    ratingProduct.classList.add('product__rating');
    ratingProduct.innerHTML = `${this.rating}`;
    descWrap.append(titleProduct, authorsProduct, ratingProduct);

    //wrap for price and stock
    const productWrap = document.createElement('div');
    productWrap.classList.add('product__wrap');

    const priceProduct = document.createElement('div');
    priceProduct.classList.add('product__cost');
    priceProduct.innerHTML = `Price: ${this.price} $`;

    const stockProduct = document.createElement('div');
    stockProduct.classList.add('product__stock');
    stockProduct.innerHTML = `Stock: ${this.stock}`;
    productWrap.append(priceProduct, stockProduct);

    //wrap for count
    const countProductWrap = document.createElement('div');
    countProductWrap.classList.add('product__count', 'count');

    const btnPlus = document.createElement('button');
    btnPlus.classList.add('product__btn', 'count__up');
    btnPlus.innerHTML = '+';

    const count = document.createElement('p');
    count.classList.add('count__text');
    count.innerHTML = `${this.count}`;

    const btnMinus = document.createElement('button');
    btnMinus.classList.add('product__btn', 'count__down');
    btnMinus.innerHTML = '-';
    countProductWrap.append(btnPlus, count, btnMinus);

    productCard.append(productNum, wrapPhotoProduct, descWrap, productWrap, countProductWrap);

    return productCard;
  }
}

export class SummaryCart {
  count: number;
  total: number;

  constructor(countProducts: number, totalPrice: number) {
    this.count = countProducts;
    this.total = totalPrice;
  }

  renderSummary() {
    const summaryBlock = document.createElement('div');
    summaryBlock.classList.add('cart__summary', 'summary');

    const summaryTitle = document.createElement('h2');
    summaryTitle.classList.add('summary__title');
    summaryTitle.innerHTML = 'Summary';

    const summaryProducts = document.createElement('p');
    summaryProducts.classList.add('summary__products');
    summaryProducts.innerHTML = `Products: ${this.count}`;

    const summaryTotal = document.createElement('p');
    summaryTotal.classList.add('summary__total');
    summaryTotal.innerHTML = `Total: ${this.total} $`;

    const formForPromoCode = document.createElement('form');
    const inputForPromoCode = document.createElement('input');
    inputForPromoCode.type = 'search';
    inputForPromoCode.placeholder = 'Enter promo code';
    inputForPromoCode.classList.add('summary__promocode');
    formForPromoCode.append(inputForPromoCode);

    const promoCodeText = document.createElement('p');
    promoCodeText.classList.add('summary__test');
    promoCodeText.innerHTML = `Promo for test: '2023', 'RSSchool'`;

    const btnBuyNow = document.createElement('button');
    btnBuyNow.classList.add('summary__btn');
    btnBuyNow.innerHTML = 'BUY NOW';

    summaryBlock.append(summaryTitle, summaryProducts, summaryTotal, formForPromoCode, promoCodeText, btnBuyNow);

    return summaryBlock;
  }
}
