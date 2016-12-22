import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-nav-link')
@inject(DOM.Element)
export class MDLNavigationLink {

  constructor(element){
    this.element = element;
    this.element.classList.add('mdl-navigation__link');
    this.element.style.cursor = 'pointer';
  }
}
