import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-card-title-text')
@inject(DOM.Element)
export class MDLCardTitleText {

  _validNodes = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
  constructor(element){
    this.element = element;
    if (this._validNodes.indexOf(element.nodeName) === -1) {
      throw new Error(`valid elements are ${this._validNodes}`);
    }
  }

  //lifecycle
  bind(bindingContext: Object, overrideContext: Object) {
    this.element.classList.add('mdl-card__title-text');
  }

  unbind() {
    this.element.classList.remove('mdl-card__title-text');
  }
}
