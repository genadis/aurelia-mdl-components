import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-card-actions')
@inject(DOM.Element)
export class MDLCardActions {

  constructor(element){
    this.element = element;
  }

  //lifecycle
  bind(bindingContext: Object, overrideContext: Object) {
    this.element.classList.add('mdl-card__actions');
  }

  unbind() {
    this.element.classList.remove('mdl-card__actions');
  }
}
