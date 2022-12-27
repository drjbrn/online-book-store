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

  constructor(data: BooksList[]) {
    this.data = data;
    this.genres = [];
    this.categories = [];
    this.init();
  }
  init() {
    this.data.forEach((item) => {
      if (!this.genres.includes(item.genres)) this.genres.push(item.genres);
      if (!this.categories.includes(item.categories)) this.categories.push(item.categories);
    });
  }
  createFilter() {
    const formFilter = document.createElement('form');

    formFilter.classList.add('filter');
    formFilter.append(this.createCategoryBlock(this.categories), this.createCategoryBlock(this.genres));
    return formFilter;
  }
  createCategoryBlock(listCategories: string[]) {
    const category = document.createElement('div');
    const inputs = listCategories.map((item) => {
      const inputBox = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');
      label.htmlFor = item;
      label.textContent = item;
      input.type = 'checkbox';
      input.name = item;
      input.id = item;
      inputBox.append(input, label);
      return inputBox;
    });
    category.classList.add('filter__block');
    category.append(...inputs);
    return category;
  }
}

export default Filter;
