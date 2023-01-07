import './_catalog-page.scss';
import { BooksList } from '../../modules/books';
import ProductCard from '../Card/index';
import Filter from '../Filters/index';
import '../Cart/cart';

class CatalogPage {
  mainPage: HTMLElement | null;
  data: BooksList[];
  filter: HTMLFormElement;
  catalog: HTMLDivElement;
  form: Filter;
  btnList: HTMLButtonElement;
  btnGrid: HTMLButtonElement;
  totalFound: HTMLParagraphElement;

  constructor(data: BooksList[], mainId: string) {
    this.mainPage = document.getElementById(mainId);
    this.data = data;
    this.form = new Filter(data);
    this.catalog = document.createElement('div');
    this.filter = this.form.createFilter();
    this.btnList = document.createElement('button');
    this.btnGrid = document.createElement('button');
    this.totalFound = document.createElement('p');
  }
  init = () => {
    if (this.mainPage) {
      const catalogWrapper = document.createElement('div');
      const catalogBlock = document.createElement('div');
      const urlParams = new URLSearchParams(location.search);

      this.mainPage.innerHTML = '';
      catalogWrapper.classList.add('catalog__wrapper', 'container');
      this.filter = this.form.init();
      this.filter.addEventListener('change', (event) => {
        event.preventDefault();
        this.render();
      });
      this.form.productFiltering();
      catalogBlock.classList.add('catalog');

      if (urlParams.get('view') === 'list') {
        this.catalog.classList.add('catalog__cards_list');
      } else {
        this.catalog.classList.add('catalog__cards_grid');
      }
      catalogBlock.append(this.createControls(), this.catalog);
      catalogWrapper.append(this.filter, catalogBlock);
      this.mainPage?.append(catalogWrapper);
      this.form.renderCards = this.render.bind(this);
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
    this.totalFound.innerText = `Total: ${this.form.filterData.length}`;
    cards.length > 0 ? this.catalog.append(...cards) : this.catalog.append(this.createError());
  }
  createControls() {
    const catalogControls = document.createElement('div');

    catalogControls.classList.add('catalog__controls', 'filter__block');
    catalogControls.append(this.createSort(), this.createSearch(), this.createViewControlBlock(), this.totalFound);

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
      const urlParams = new URLSearchParams(location.search);
      urlParams.delete('sort');
      urlParams.append('sort', `${(e.target as HTMLInputElement).value}`);
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
  createError() {
    const err = document.createElement('p');

    err.classList.add('catalog__error');
    err.innerText = 'Product not found';

    return err;
  }
  createViewControlBlock() {
    const viewBox = document.createElement('div');
    this.btnList = document.createElement('button');
    this.btnGrid = document.createElement('button');
    const urlParams = new URLSearchParams(location.search);

    this.btnGrid.classList.add('catalog__controls-btn');
    this.btnGrid.dataset.view = 'grid';
    this.btnGrid.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs>
    <style>.cls-1{fill:#fff;opacity:0;}.cls-2{fill:#231f20;}</style>
    </defs><title>grid</title><g id="Layer_2" data-name="Layer 2"><g id="grid"><g id="grid-2" data-name="grid">
    <rect class="cls-1" width="24" height="24"/>
    <path class="cls-2" d="M9,3H5A2,2,0,0,0,3,5V9a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V5A2,2,0,0,0,9,3Z"/>
    <path class="cls-2" d="M19,3H15a2,2,0,0,0-2,2V9a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z"/>
    <path class="cls-2" d="M9,13H5a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V15A2,2,0,0,0,9,13Z"/>
    <path class="cls-2" d="M19,13H15a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V15A2,2,0,0,0,19,13Z"/></g></g></g>
    </svg>`;

    this.btnList.classList.add('catalog__controls-btn');
    this.btnGrid.dataset.view = 'list';
    // eslint-disable-next-line max-len
    this.btnList.innerHTML = `<svg id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M224,152v48a16.01833,16.01833,0,0,1-16,16H48a16.01833,16.01833,0,0,1-16-16V152a16.01833,16.01833,0,0,1,16-16H208A16.01833,16.01833,0,0,1,224,152ZM208,40H48A16.01833,16.01833,0,0,0,32,56v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,208,40Z"/></svg>`;

    if (urlParams.get('view') === 'list') {
      this.btnList.classList.add('catalog__controls-btn_active');
    } else {
      this.btnGrid.classList.add('catalog__controls-btn_active');
    }
    this.btnList.addEventListener('click', () => this.chengeView('list'));
    this.btnGrid.addEventListener('click', () => this.chengeView('grid'));
    viewBox.classList.add('catalog__controls-views');
    viewBox.append(this.btnGrid, this.btnList);
    return viewBox;
  }
  chengeView(str: string) {
    const urlParams = new URLSearchParams(location.search);

    urlParams.delete('view');
    urlParams.set('view', str);

    history.pushState('', '', '?' + urlParams.toString());
    if (urlParams.get('view') === 'list') {
      this.btnList.classList.toggle('catalog__controls-btn_active');
      this.btnGrid.className = 'catalog__controls-btn';
      this.catalog.className = 'catalog__cards_list';
    } else {
      this.btnGrid.classList.toggle('catalog__controls-btn_active');
      this.btnList.className = 'catalog__controls-btn';
      this.catalog.className = 'catalog__cards_grid';
    }
    this.render();
  }
}

export default CatalogPage;
