import './_filters.scss';

interface BooksList {
  title: string;
  authors: string;
  description?: string;
  categories: string;
  genres: string;
  isbn13?: number;
  publishedDate?: string;
  price: number;
  image: string;
  image2?: string;
  rating: number;
  stock?: number;
}

class Filter {
  data: BooksList[];
  genres: string[];
  categories: string[];
  resultArr: BooksList[];

  constructor(data: BooksList[]) {
    this.data = data;
    this.genres = [];
    this.categories = [];
    this.resultArr = [];
    this.init();
  }
  init() {
    this.data.forEach((item) => {
      if (!this.genres.includes(item.genres.toLowerCase())) this.genres.push(item.genres.toLowerCase());
      if (!this.categories.includes(item.categories.toLowerCase())) this.categories.push(item.categories.toLowerCase());
    });
  }
  createFilter() {
    const formFilter = document.createElement('form');

    formFilter.classList.add('filter');
    formFilter.append(
      this.createCategoryBlock(this.categories, 'Categories'),
      this.createCategoryBlock(this.genres, 'genres'),
      this.createRange('price'),
      this.createRange('Stock')
    );
    return formFilter;
  }
  createCategoryBlock(listCategories: string[], title: string) {
    const category = document.createElement('div');
    const inputs = listCategories.map((item) => {
      const inputBox = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');
      label.htmlFor = item;
      label.textContent = `${item[0].toUpperCase()}${item.slice(1)}`;
      input.type = 'checkbox';
      input.name = item;
      input.id = item;
      inputBox.append(input, label);
      return inputBox;
    });
    category.classList.add('filter__block');
    category.append(this.createTitle(title), ...inputs);
    return category;
  }
  createRange(title: string) {
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

    inputStart.id = `${title.toLowerCase()}Start`;
    inputStart.type = 'range';
    inputStart.value = '10';
    inputStart.min = '0';
    inputStart.max = '100';

    inputEnd.id = `${title.toLowerCase()}End`;
    inputEnd.type = 'range';
    inputEnd.value = '30';
    inputEnd.min = '0';
    inputEnd.max = '100';

    formControlMin.classList.add('filter__form-control-container');
    formControlMax.classList.add('filter__form-control-container');

    formControlTextMin.classList.add('filter__form-control-text');
    formControlTextMin.innerText = 'Min';
    formControlTextMax.classList.add('filter__form-control-text');
    formControlTextMax.innerText = 'Max';

    formControlInputMin.classList.add('filter__form-control-input');
    formControlInputMin.type = 'number';
    formControlInputMin.id = `${title.toLowerCase()}From`;
    formControlInputMin.value = '10';
    formControlInputMin.min = '0';
    formControlInputMin.max = '100';
    formControlInputMax.classList.add('filter__form-control-input');
    formControlInputMax.type = 'number';
    formControlInputMax.id = `${title.toLowerCase()}To`;
    formControlInputMax.value = '30';
    formControlInputMax.min = '0';
    formControlInputMax.max = '100';

    inputStart.addEventListener('input', () => {
      this.controlFromSlider(inputStart, inputEnd, formControlInputMin);
    });
    inputEnd.addEventListener('input', () => {
      this.controlToSlider(inputStart, inputEnd, formControlInputMax);
    });
    formControlInputMin.addEventListener('input', () => {
      this.controlFromInput(inputStart, formControlInputMin, formControlInputMax, inputEnd);
    });
    formControlInputMin.addEventListener('input', () => {
      this.controlToInput(inputEnd, formControlInputMin, formControlInputMax, inputEnd);
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
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
      fromSlider.value = `${to}`;
      fromInput.value = `${to}`;
    } else {
      fromInput.value = `${from}`;
    }
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
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
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
}

export default Filter;
