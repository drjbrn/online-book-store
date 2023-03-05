import './_no-page.scss';

interface NoPage {
  render(): void;
}
class NoPage implements NoPage {
  render() {
    const main = document.getElementById('main') as HTMLElement;
    const errDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const description = document.createElement('p');

    h1.textContent = '404';
    h1.classList.add('error__title');
    description.classList.add('error__description');
    description.innerText = 'Page not found';
    errDiv.classList.add('error', 'container');
    errDiv.append(h1, description);
    main.innerHTML = '';
    main.append(errDiv);
  }
}
export default NoPage;
