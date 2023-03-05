import './index.html';
import './index.scss';
import Router from './modules/Router/Router';
import NoPage from './components/NoPage/index';
import CatalogPage from './components/CatalogPage/index';
import { books } from './modules/books';
import ProductDescriptionPage from './components/ProductDescription/ProductDescriptionPage';

const catalogPage = new CatalogPage(books, 'main');
const noPage = new NoPage();
const router = new Router();
const productDesc = new ProductDescriptionPage(books);

const arrRouts: { [index: string]: () => void } = {};
books.forEach((item) => {
  arrRouts[`/${item.isbn13}`] = productDesc.render;
});
console.log(arrRouts);

router.addRoutes({
  '404': noPage.render,
  '/': catalogPage.init
});
router.addRoutes(arrRouts);
router.init();
