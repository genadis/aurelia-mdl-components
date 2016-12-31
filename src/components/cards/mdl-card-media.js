import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-card-media')
@inject(DOM.Element)
export class MDLCardMedia {

  constructor(element){
    this.element = element;
  }

  //lifecycle
  bind(bindingContext: Object, overrideContext: Object) {
    this.element.classList.add('mdl-card__media');
  }

  unbind() {
    this.element.classList.remove('mdl-card__media');
  }
}
