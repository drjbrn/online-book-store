import './_catalog-page.scss';
import { BooksList } from '../../modules/books';
import ProductCard from '../Card/index';

class CatalogPage {
  mainPage: HTMLElement | null;
  data: BooksList[];

  constructor(data: BooksList[], mainId: string) {
    this.mainPage = document.getElementById(mainId);
    this.data = data;
  }
  init = () => {
    if (this.mainPage) {
      this.mainPage.innerHTML = '';
      this.render();
    }
  };
  render() {
    const cards = this.data.map((item) => {
      const card = new ProductCard(item);
      return card.createCard();
    });
    const catalogWrapper = document.createElement('div');
    catalogWrapper.classList.add('catalog__wrapper');

    const catalog = document.createElement('div');
    catalog.classList.add('catalog');

    catalog.append(...cards);

    const filter = document.createElement('div');
    filter.classList.add('filter');

    catalogWrapper.append(filter, catalog);
    this.mainPage?.append(catalogWrapper);
  }
}

export default CatalogPage;
