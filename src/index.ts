import './index.html';
import './index.scss';
import Router from './modules/Router/Router';
import NoPage from './components/NoPage/index';
import CatalogPage from './components/CatalogPage/index';
import { books } from './modules/books';

const catalogPage = new CatalogPage(books, 'main');
const noPage = new NoPage();
const router = new Router();

router.addRoutes({
  '404': noPage.render,
  '/': catalogPage.init
});
router.init();
