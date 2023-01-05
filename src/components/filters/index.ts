import './_filters.scss';

interface BooksList {
  title: string;
  authors: string;
  description: string;
  categories: string;
  genres: string;
  isbn13: number;
  publishedDate: string;
  price: number;
  image: string;
  image2?: string;
  rating: number;
  stock: number;
}

class Filter {
  data: BooksList[];
  genres: string[];
  categories: string[];
  resultArr: BooksList[];
  filterData: BooksList[];
  maxPrice: number;
  maxStock: number;
  statusFilterData: { [index: string]: number } = {};
  statusData: { [index: string]: number } = {};
  numberFound: { [index: string]: HTMLParagraphElement } = {};

  constructor(data: BooksList[]) {
    this.data = data;
    this.genres = [];
    this.categories = [];
    this.resultArr = [];
    this.filterData = data;
    this.statusFilterData = {};
    this.statusData = {};
    this.numberFound = {};
    this.maxPrice = this.data.reduce((prev, item) => {
      return prev < item.price ? item.price : prev;
    }, 0);
    this.maxStock = this.data.reduce((prev, item) => {
      return prev < item.stock ? item.stock : prev;
    }, 0);
  }
  init() {
    this.data.forEach((item) => {
      if (!this.genres.includes(item.genres.toLowerCase())) this.genres.push(item.genres.toLowerCase());
      if (!this.categories.includes(item.categories.toLowerCase())) this.categories.push(item.categories.toLowerCase());
    });
    return this.createFilter();
  }
  createFilter() {
    const formFilter = document.createElement('form');

    formFilter.classList.add('filter');
    formFilter.id = 'filter';
    formFilter.append(
      this.createCategoryBlock(this.categories, 'Categories'),
      this.createCategoryBlock(this.genres, 'genres'),
      this.createRange('price', 0, this.maxPrice),
      this.createRange('Stock', 0, this.maxStock)
    );
    return formFilter;
  }
  createCategoryBlock(listCategories: string[], title: string) {
    const category = document.createElement('div');

    const inputs = listCategories.map((item) => {
      const inputsBox = document.createElement('div');
      const inputContainer = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');
      const numberFound = document.createElement('p');

      label.htmlFor = item;
      label.textContent = `${item[0].toUpperCase()}${item.slice(1)}`;
      input.type = 'checkbox';
      input.name = item;
      input.id = item;
      const search = new URLSearchParams(location.search);
      input.checked = search.has(item);
      input.addEventListener('change', (e) => {
        const search = new URLSearchParams(location.search);
        if (!(e.target as HTMLInputElement).checked) {
          search.delete(item);
          history.pushState('', '', '?' + search.toString());
        } else {
          search.append(item, title.toLowerCase());
          history.pushState('', '', '?' + search.toString());
        }
      });
      numberFound.innerHTML = `${this.statusFilterData[item]}/${this.statusData[item]}`;
      this.numberFound[item] = numberFound;
      inputContainer.classList.add('filter__checkbox-container');
      inputContainer.append(input, label);
      inputsBox.classList.add('filter__item');
      inputsBox.append(inputContainer, numberFound);
      return inputsBox;
    });
    category.classList.add('filter__block');
    category.append(this.createTitle(title), ...inputs);
    return category;
  }
  createRange(title: string, min: number, max: number) {
    const rangeContainer = document.createElement('div');
    const sliderControl = document.createElement('div');
    const inputStart = document.createElement('input');
    const inputEnd = document.createElement('input');
    const formControl = document.createElement('div');
    const formControlMin = document.createElement('div');
    const formControlMax = document.createElement('div');
    const formControlTextMin = document.createElement('div');
    const formControlTextMax = document.createElement('div');
    const formControlInputMin = document.createElement('input');
    const formControlInputMax = document.createElement('input');
    const search = new URLSearchParams(location.search);

    inputStart.id = `${title.toLowerCase()}Start`;
    inputStart.type = 'range';
    inputStart.value = search.has(`${title.toLowerCase()}Min`) ? `${search.get(`${title.toLowerCase()}Min`)}` : '10';
    inputStart.min = `${min}`;
    inputStart.max = `${max + max / 2}`;
    inputStart.name = `${title.toLowerCase()}Min`;

    inputEnd.id = `${title.toLowerCase()}End`;
    inputEnd.type = 'range';
    inputEnd.value = search.has(`${title.toLowerCase()}Max`) ? `${search.get(`${title.toLowerCase()}Max`)}` : '30';
    inputEnd.min = `${min}`;
    inputEnd.max = `${max + max / 2}`;
    inputEnd.name = `${title.toLowerCase()}Max`;

    formControlMin.classList.add('filter__form-control-container');
    formControlMax.classList.add('filter__form-control-container');

    formControlTextMin.classList.add('filter__form-control-text');
    formControlTextMin.innerText = 'Min';
    formControlTextMax.classList.add('filter__form-control-text');
    formControlTextMax.innerText = 'Max';

    formControlInputMin.classList.add('filter__form-control-input');
    formControlInputMin.type = 'number';
    formControlInputMin.id = `${title.toLowerCase()}From`;
    formControlInputMin.value = search.has(`${title.toLowerCase()}Min`)
      ? `${search.get(`${title.toLowerCase()}Min`)}`
      : '10';
    formControlInputMin.min = `${min}`;
    formControlInputMin.max = `${max + max / 2}`;
    formControlInputMin.name = `${title.toLowerCase()}Min`;
    formControlInputMax.classList.add('filter__form-control-input');
    formControlInputMax.type = 'number';
    formControlInputMax.id = `${title.toLowerCase()}To`;
    formControlInputMax.value = search.has(`${title.toLowerCase()}Max`)
      ? `${search.get(`${title.toLowerCase()}Max`)}`
      : '30';
    formControlInputMax.min = `${min}`;
    formControlInputMax.max = `${max + max / 2}`;
    formControlInputMax.name = `${title.toLowerCase()}Max`;

    inputStart.addEventListener('input', () => {
      this.controlFromSlider(inputStart, inputEnd, formControlInputMin);
      this.setValueFromRange(inputStart);
    });
    inputEnd.addEventListener('input', () => {
      this.controlToSlider(inputStart, inputEnd, formControlInputMax);
      this.setValueFromRange(inputEnd);
    });
    formControlInputMin.addEventListener('input', () => {
      this.controlFromInput(inputStart, formControlInputMin, formControlInputMax, inputEnd);
      this.setValueFromRange(inputStart);
    });
    formControlInputMax.addEventListener('input', () => {
      this.controlToInput(inputEnd, formControlInputMin, formControlInputMax, inputEnd);
      this.setValueFromRange(formControlInputMax);
    });

    sliderControl.classList.add('filter__sliders-control');
    sliderControl.append(inputStart, inputEnd);
    formControlMin.append(formControlTextMin, formControlInputMin);
    formControlMax.append(formControlTextMax, formControlInputMax);
    formControl.classList.add('filter__form-control');
    formControl.append(formControlMin, formControlMax);
    rangeContainer.classList.add('filter__range-container', 'filter__block');
    rangeContainer.append(this.createTitle(title), sliderControl, formControl);
    return rangeContainer;
  }
  createTitle(title: string) {
    const blockTitle = document.createElement('h3');

    title.toLocaleLowerCase();
    blockTitle.classList.add('filter__title');
    blockTitle.innerText = `${title[0].toUpperCase()}${title.slice(1)}`;
    return blockTitle;
  }
  controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, fromInput: HTMLInputElement) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, '#ffffff', '#25daa5', toSlider);
    if (from > to) {
      fromSlider.value = `${to}`;
      fromInput.value = `${to}`;
    } else {
      fromInput.value = `${from}`;
    }
  }
  setValueFromRange(slider: HTMLInputElement) {
    const search = new URLSearchParams(location.search);
    if (search.has(`${slider.name}`)) search.delete(`${slider.name}`);
    search.append(`${slider.name}`, `${slider.value}`);
    window.history.pushState('', '', '?' + search.toString());
  }
  fillSlider(
    from: HTMLInputElement,
    to: HTMLInputElement,
    sliderColor: string,
    rangeColor: string,
    controlSlider: HTMLInputElement
  ) {
    const rangeDistance = +to.max - +to.min;
    const fromPosition = +from.value - +to.min;
    const toPosition = +to.value - +to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }
  getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }
  controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toInput: HTMLInputElement) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, '#ffffff', '#25daa5', toSlider);
    this.setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = `${to}`;
      toInput.value = `${to}`;
    } else {
      toInput.value = `${from}`;
      toSlider.value = `${from}`;
    }
  }
  setToggleAccessible(currentTarget: HTMLInputElement) {
    if (Number(currentTarget.value) <= 0) {
      currentTarget.style.zIndex = '2';
    } else {
      currentTarget.style.zIndex = '0';
    }
  }
  controlFromInput(
    fromSlider: HTMLInputElement,
    fromInput: HTMLInputElement,
    toInput: HTMLInputElement,
    controlSlider: HTMLInputElement
  ) {
    const [from, to] = this.getParsed(fromInput, toInput);
    this.fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    if (from > to) {
      fromSlider.value = `${to}`;
      fromInput.value = `${to}`;
    } else {
      fromSlider.value = `${from}`;
    }
  }
  controlToInput(
    toSlider: HTMLInputElement,
    fromInput: HTMLInputElement,
    toInput: HTMLInputElement,
    controlSlider: HTMLInputElement
  ) {
    const [from, to] = this.getParsed(fromInput, toInput);
    this.fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    this.setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = `${to}`;
      toInput.value = `${to}`;
    } else {
      toInput.value = `${from}`;
    }
  }
  productFiltering() {
    const filteringParameters = new URLSearchParams(location.search);
    if (location.search) {
      this.filterData = this.categoriesFilter(filteringParameters, this.data, 'categories');
      this.filterData = this.categoriesFilter(filteringParameters, this.filterData, 'genres');
      this.filterData = this.rangeFilter(filteringParameters, this.filterData, 'price');
      this.filterData = this.rangeFilter(filteringParameters, this.filterData, 'stock');
      this.filterData = this.searchFilter(filteringParameters, this.filterData);
    } else {
      this.filterData = this.data;
    }
    this.statusFound();
  }
  categoriesFilter(objSearch: URLSearchParams, data: BooksList[], categories: 'categories' | 'genres') {
    const arr: BooksList[] = [];
    let couter = 0;
    objSearch.forEach((value, key) => {
      data.forEach((dataItem) => {
        if (categories === value) {
          couter++;
          if (dataItem[categories].toLowerCase() === key) arr.push(dataItem);
        }
      });
    });
    return couter > 0 ? arr : data;
  }
  rangeFilter(objSearch: URLSearchParams, data: BooksList[], categories: 'price' | 'stock') {
    const arr: BooksList[] = [];
    const min = objSearch.get(`${categories}Min`) || 0;
    const max = objSearch.get(`${categories}Max`) || 30;
    data.forEach((dataItem) => {
      if (dataItem[categories] >= +min && dataItem[categories] <= +max) arr.push(dataItem);
    });
    return arr;
  }
  searchFilter(objSearch: URLSearchParams, data: BooksList[]) {
    const serchValue = new RegExp(`${objSearch.get('search')?.toLowerCase()}`);
    if (objSearch.has('search')) {
      return data.filter(
        (item) =>
          serchValue.test(item.title.toLowerCase()) ||
          serchValue.test(item.authors.toLowerCase()) ||
          serchValue.test(item.description.toLowerCase()) ||
          serchValue.test(item.categories.toLowerCase()) ||
          serchValue.test(item.genres.toLowerCase()) ||
          serchValue.test(item.publishedDate.toLowerCase()) ||
          serchValue.test(item.price.toString()) ||
          serchValue.test(item.isbn13.toString())
      );
    }
    return data;
  }
  sortData() {
    const urlParams = new URLSearchParams(location.search);
    const val = urlParams.get('sort');
    if (val === 'price') this.filterData.sort((a, b) => a.price - b.price);
    if (val === 'title') this.filterData.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
    if (val === 'rating') this.filterData.sort((a, b) => a.rating - b.rating);
    if (val === 'price-r') this.filterData.sort((a, b) => a.price - b.price).reverse();
    if (val === 'title-r') this.filterData.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0)).reverse();
    if (val === 'rating-r') this.filterData.sort((a, b) => a.rating - b.rating).reverse();
  }
  statusFound() {
    this.statusData = {};
    this.statusFilterData = {};

    this.data.forEach((item) => {
      this.statusData[item.categories.toLowerCase()] = this.statusData[item.categories.toLowerCase()]
        ? ++this.statusData[item.categories.toLowerCase()]
        : 1;
      this.statusData[item.genres.toLowerCase()] = this.statusData[item.genres.toLowerCase()]
        ? ++this.statusData[item.genres.toLowerCase()]
        : 1;
    });
    this.filterData.forEach((item) => {
      this.statusFilterData[item.categories.toLowerCase()] = this.statusFilterData[item.categories.toLowerCase()]
        ? ++this.statusFilterData[item.categories.toLowerCase()]
        : 1;
      this.statusFilterData[item.genres.toLowerCase()] = this.statusFilterData[item.genres.toLowerCase()]
        ? ++this.statusFilterData[item.genres.toLowerCase()]
        : 1;
    });
    this.categories.forEach(
      (item) =>
        (this.numberFound[item].innerHTML = `${this.statusFilterData[item] ? this.statusFilterData[item] : 0}/${
          this.statusData[item]
        }`)
    );
    this.genres.forEach(
      (item) =>
        (this.numberFound[item].innerHTML = `${this.statusFilterData[item] ? this.statusFilterData[item] : 0}/${
          this.statusData[item]
        }`)
    );
  }
}

export default Filter;
