import './index.html';
import './index.scss';
import Router from './modules/Router/Router';
import NoPage from './components/NoPage/index';

const noPage = new NoPage();
const router = new Router();

router.addRoutes({ '404': noPage.render });
router.init();
