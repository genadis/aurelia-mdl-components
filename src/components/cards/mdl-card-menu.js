import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-card-menu')
@inject(DOM.Element)
export class MDLCardMenu {

  constructor(element){
    this.element = element;
  }

  //lifecycle
  bind(bindingContext: Object, overrideContext: Object) {
    this.element.classList.add('mdl-card__menu');
  }

  unbind() {
    this.element.classList.remove('mdl-card__menu');
  }
}
