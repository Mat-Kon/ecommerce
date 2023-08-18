import { renderChangeContent } from '../../shared/utilities/render';

const body = document.querySelector('body');

export const customRoute = (pathName: string): void => {
  window.history.pushState({}, '', pathName);
  const newPath = window.location.pathname;
  renderChangeContent(newPath);
};

export const routing = () => {
  body?.addEventListener('click', (event) => {
    const elem = event.target as HTMLElement;

    if (elem.tagName === 'A') {
      event.preventDefault();
      const path = elem.getAttribute('href') as string;
      customRoute(path);
    }
  });
};
