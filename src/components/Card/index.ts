/* eslint-disable max-len */
import './_card.scss';
import { BooksList } from '../../modules/books';

class ProductCard {
  title: string;
  authors: string;
  price: number;
  image: string;
  rating: number;

  constructor(card: BooksList) {
    this.title = card?.title;
    this.authors = card?.authors;
    this.price = card?.price;
    this.image = card?.image;
    this.rating = card?.rating;
  }

  createCard() {
    //main wrapper
    const catalogCards = document.createElement('div');
    catalogCards.classList.add('card');

    //wrapper for text and btn
    const wrapCards = document.createElement('div');
    wrapCards.classList.add('card__wrap');

    //wrapper for text
    const cardDesc = document.createElement('div');
    cardDesc.classList.add('card__desc');

    //books photo
    const wrapPhotoBook = document.createElement('div');
    wrapPhotoBook.classList.add('card__img');

    const photoBook = document.createElement('img');
    photoBook.classList.add('card__img');
    photoBook.src = this.image;
    photoBook.alt = this.title;
    wrapPhotoBook.append(photoBook);

    //the title of the book
    const titleBook = document.createElement('h2');
    titleBook.classList.add('card__title');
    titleBook.innerHTML = this.title;

    //the author of the book
    const authorsBook = document.createElement('h3');
    authorsBook.classList.add('card__author');
    authorsBook.innerHTML = this.authors;

    //book rating
    const cardRating = document.createElement('div');
    cardRating.classList.add('card__rating', 'rating');

    const ratingBody = document.createElement('div');
    ratingBody.classList.add('rating__body');

    const ratingActive = document.createElement('div');
    ratingActive.classList.add('rating__active');
    ratingActive.style.width = `${Number(this.rating) / 0.05}%`;

    const ratingItems = document.createElement('div');
    ratingItems.classList.add('rating__items');
    ratingItems.innerHTML = `<input type="radio" class= "rating__item" value="1" name="rating">
    <input type="radio" class= "rating__item" value="2" name="rating">
    <input type="radio" class= "rating__item" value="3" name="rating">
    <input type="radio" class= "rating__item" value="4" name="rating">
    <input type="radio" class= "rating__item" value="5" name="rating">`;

    const ratingValue = document.createElement('div');
    ratingValue.classList.add('rating__value');
    ratingValue.innerHTML = `${this.rating}`;

    ratingActive.append(ratingItems);
    ratingBody.append(ratingActive);
    cardRating.append(ratingBody, ratingValue);

    //book price
    const wrapPrice = document.createElement('div');
    wrapPrice.classList.add('card__value');

    const priceBook = document.createElement('p');
    priceBook.classList.add('card__price');
    priceBook.innerHTML = `${this.price}`;

    const priceSymbol = document.createElement('span');
    priceSymbol.classList.add('card__value_symbol');
    priceSymbol.innerHTML = '$';

    wrapPrice.append(priceBook, priceSymbol);

    //btn
    const btnCards = document.createElement('div');
    btnCards.classList.add('card__btn');

    const btnLook = document.createElement('button');
    btnLook.classList.add('card__btn_look');
    btnLook.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.5 15.15L24.25 18.75C23.0784 20.039 21.6504 21.0689 20.0574 21.7737C18.4645 22.4784 16.7419 22.8425 15 22.8425C13.2581 22.8425 11.5355 22.4784 9.94257 21.7737C8.34964 21.0689 6.92159 20.039 5.75 18.75L2.5 15.15L5.4 11.675C6.57313 10.2683 8.04109 9.13653 9.70001 8.35988C11.3589 7.58323 13.1683 7.18066 15 7.18066C16.8317 7.18066 18.6411 7.58323 20.3 8.35988C21.9589 9.13653 23.4269 10.2683 24.6 11.675L27.5 15.15Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.1125 17.825C16.9075 17.825 18.3625 16.4258 18.3625 14.7C18.3625 12.9741 16.9075 11.575 15.1125 11.575C13.3176 11.575 11.8625 12.9741 11.8625 14.7C11.8625 16.4258 13.3176 17.825 15.1125 17.825Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>`;

    const btnLike = document.createElement('button');
    btnLike.classList.add('card__btn_like');
    btnLike.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6376 6.1125C17.8311 4.91902 19.4498 4.24854 21.1376 4.24854C22.8254 4.24854 24.4441 4.91902 25.6376 6.1125C26.8311 7.30597 27.5016 8.92467 27.5016 10.6125C27.5016 12.3003 26.8311 13.919 25.6376 15.1125L24.0001 16.75L15.0001 25.75L6.00012 16.75L4.36262 15.1125C3.16914 13.919 2.49866 12.3003 2.49866 10.6125C2.49866 8.92467 3.16914 7.30597 4.36262 6.1125C5.55609 4.91902 7.17479 4.24854 8.86262 4.24854C10.5504 4.24854 12.1691 4.91902 13.3626 6.1125L15.0001 7.75L16.6376 6.1125Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    const btnShop = document.createElement('button');
    btnShop.classList.add('card__btn_shop');
    btnShop.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3622 26.0625H7.63718C7.24008 26.0629 6.85433 25.9301 6.5416 25.6854C6.22888 25.4406 6.00726 25.0981 5.91218 24.7125L2.59968 11.45C2.56736 11.3209 2.56492 11.1862 2.59254 11.056C2.62016 10.9258 2.67712 10.8036 2.75909 10.6987C2.84105 10.5938 2.94586 10.5091 3.06553 10.4508C3.1852 10.3926 3.31659 10.3624 3.44968 10.3625H26.5497C26.6828 10.3624 26.8142 10.3926 26.9338 10.4508C27.0535 10.5091 27.1583 10.5938 27.2403 10.6987C27.3222 10.8036 27.3792 10.9258 27.4068 11.056C27.4345 11.1862 27.432 11.3209 27.3997 11.45L24.0872 24.7125C23.9921 25.0981 23.7705 25.4406 23.4578 25.6854C23.145 25.9301 22.7593 26.0629 22.3622 26.0625V26.0625Z"" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.2495 3.9375L8.62451 10.3625" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.3499 3.9375L20.9874 10.3625" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    btnCards.append(btnLook, btnLike, btnShop);

    //add elements
    catalogCards.append(wrapPhotoBook, wrapCards);
    wrapCards.append(cardDesc, btnCards);
    cardDesc.append(titleBook, authorsBook, cardRating, wrapPrice);

    return catalogCards;
  }
}

export default ProductCard;
