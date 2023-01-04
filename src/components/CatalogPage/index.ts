import './_catalog-page.scss';
import { BooksList } from '../../modules/books';
import ProductCard from '../Card/index';
import Filter from '../Filters/index';

class CatalogPage {
  mainPage: HTMLElement | null;
  data: BooksList[];
  filter: HTMLFormElement;
  catalog: HTMLDivElement;

  constructor(data: BooksList[], mainId: string) {
    this.mainPage = document.getElementById(mainId);
    this.data = data;
    const form = new Filter(data);
    this.catalog = document.createElement('div');
    this.filter = form.createFilter();
  }
  init = () => {
    if (this.mainPage) {
      const catalogWrapper = document.createElement('div');
      const form = new Filter(this.data);

      this.mainPage.innerHTML = '';
      catalogWrapper.classList.add('catalog__wrapper', 'container');
      this.filter = form.init();
      this.filter.addEventListener('change', (event) => {
        event.preventDefault();
        form.productFiltering();
        this.render(form.filterData);
      });
      form.productFiltering();
      this.catalog.classList.add('catalog__cards');
      catalogWrapper.append(this.filter, this.catalog);
      this.mainPage?.append(catalogWrapper);

      this.render(form.filterData);
    }
  };
  render(filterData: BooksList[]) {
    this.catalog.innerHTML = '';
    const cards = filterData.map((item) => {
      const card = new ProductCard(item);
      return card.createCard();
    });

    this.catalog.append(...cards);
  }
}

export default CatalogPage;
