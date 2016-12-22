import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-nav')
@inject(DOM.Element)
export class MDLNavigation {

  constructor(element){
    this.element = element;
    this.element.classList.add('mdl-navigation');
  }
}
