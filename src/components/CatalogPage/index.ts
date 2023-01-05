import './_catalog-page.scss';
import { BooksList } from '../../modules/books';
import ProductCard from '../Card/index';
import Filter from '../Filters/index';

class CatalogPage {
  mainPage: HTMLElement | null;
  data: BooksList[];
  filter: HTMLFormElement;
  catalog: HTMLDivElement;
  form: Filter;

  constructor(data: BooksList[], mainId: string) {
    this.mainPage = document.getElementById(mainId);
    this.data = data;
    this.form = new Filter(data);
    this.catalog = document.createElement('div');
    this.filter = this.form.createFilter();
  }
  init = () => {
    if (this.mainPage) {
      const catalogWrapper = document.createElement('div');
      const catalogBlock = document.createElement('div');

      this.mainPage.innerHTML = '';
      catalogWrapper.classList.add('catalog__wrapper', 'container');
      this.filter = this.form.init();
      this.filter.addEventListener('change', (event) => {
        event.preventDefault();
        this.render();
      });
      this.form.productFiltering();
      catalogBlock.classList.add('catalog');
      this.catalog.classList.add('catalog__cards');
      catalogBlock.append(this.createControls(), this.catalog);
      catalogWrapper.append(this.filter, catalogBlock);
      this.mainPage?.append(catalogWrapper);

      this.render();
    }
  };
  render() {
    this.catalog.innerHTML = '';
    this.form.productFiltering();
    this.form.sortData();
    const cards = this.form.filterData.map((item) => {
      const card = new ProductCard(item);
      return card.createCard();
    });

    this.catalog.append(...cards);
  }
  createControls() {
    const catalogControls = document.createElement('div');

    catalogControls.classList.add('catalog__controls', 'filter__block');
    catalogControls.append(this.createSort(), this.createSearch());

    return catalogControls;
  }
  createSort() {
    const sort = document.createElement('select');
    const val1 = new Option('Sort by name (a-z)', 'title');
    const val2 = new Option('Sort by price (0-9)', 'price');
    const val3 = new Option('Sort by rating (0-9)', 'rating');
    const val4 = new Option('Sort by name (z-a)', 'title-r');
    const val5 = new Option('Sort by price (9-0)', 'price-r');
    const val6 = new Option('Sort by rating (9-0)', 'rating-r');
    const urlParams = new URLSearchParams(location.search);
    sort.append(val1, val4, val2, val5, val3, val6);
    sort.addEventListener('change', (e) => {
      urlParams.delete('sort');
      urlParams.set('sort', `${(e.target as HTMLInputElement).value}`);
      window.history.pushState('', '', '?' + urlParams.toString());
      this.form.sortData();
      this.render();
    });
    if (urlParams.get('sort')) {
      sort.value = `${urlParams.get('sort')}`;
      this.form.sortData();
    }
    return sort;
  }
  createSearch() {
    const search = document.createElement('input');
    const urlParams = new URLSearchParams(location.search);

    search.type = 'search';
    search.placeholder = 'Search products';
    search.value = `${urlParams.get('search') ? urlParams.get('search') : ''}`;
    search.classList.add('catalog__search');
    search.addEventListener('input', (e) => {
      urlParams.delete('search');
      if ((e.target as HTMLInputElement).value !== '')
        urlParams.set('search', `${(e.target as HTMLInputElement).value}`);
      window.history.pushState('', '', '?' + urlParams.toString());
      this.render();
    });
    return search;
  }
}

export default CatalogPage;
