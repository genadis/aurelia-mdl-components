import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-card-supporting-text')
@inject(DOM.Element)
export class MDLCardSupportingText {

  constructor(element){
    this.element = element;
  }

  //lifecycle
  bind(bindingContext: Object, overrideContext: Object) {
    this.element.classList.add('mdl-card__supporting-text');
  }

  unbind() {
    this.element.classList.remove('mdl-card__supporting-text');
  }
}
