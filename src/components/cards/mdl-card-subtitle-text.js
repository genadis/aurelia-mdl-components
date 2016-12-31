import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-card-subtitle-text')
@inject(DOM.Element)
export class MDLCardSubtitleText {

  constructor(element){
    this.element = element;
  }

  //lifecycle
  bind(bindingContext: Object, overrideContext: Object) {
    this.element.classList.add('mdl-card__subtitle-text');
  }

  unbind() {
    this.element.classList.remove('mdl-card__subtitle-text');
  }
}
