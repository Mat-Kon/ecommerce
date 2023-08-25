import { createCustomElement } from '../../shared/utilities/helper-functions';
import { createPageTitle } from '../../shared/utilities/title';
import { PersonalInfo } from './from-personal';

export const drawProfile = () => {
  const mainWrapper = document.querySelector('.main__wrapper') as HTMLElement;
  mainWrapper.innerHTML = '';
  const wrapper = createCustomElement('div', ['wrapper']);
  mainWrapper?.append(wrapper);
  const pageTitle = createPageTitle('Personal account');
  wrapper.append(pageTitle);
  const person = PersonalInfo();
  wrapper.append(person);
}

