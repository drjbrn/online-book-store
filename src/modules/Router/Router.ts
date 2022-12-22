interface Router {
  routes: { [key: string]: () => void };
  goTo(path: string): void;
  addRoutes(routes: { [key: string]: () => void }): void;
}

class Router implements Router {
  constructor() {
    this.routes = {};
  }
  render = (path: string) => {
    let page = this.routes[404];
    if (this.routes[path]) {
      page = this.routes[path];
    }
    page();
  };
  goTo = (path: string) => {
    window.history.pushState({ path }, path, path);
    this.render(path);
  };
  addRoutes(routes: { [key: string]: () => void }) {
    Object.assign(this.routes, routes);
  }
  init = () => {
    window.addEventListener('popstate', () => {
      this.render(new URL(window.location.href).pathname);
    });
    document.querySelectorAll('[href^="/"]').forEach((el) => {
      el.addEventListener('click', (env: Event) => {
        env.preventDefault();
        if (env.target === null) {
          throw new Error('target can not be null');
        }
        const target = env.target as HTMLAnchorElement;
        const { pathname: path } = new URL(target.href);
        this.goTo(path);
      });
    });
    this.render(new URL(window.location.href).pathname);
  };
}

export default Router;
