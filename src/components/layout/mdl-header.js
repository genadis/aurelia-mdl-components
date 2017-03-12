import {customAttribute, inject, DOM, bindable, computedFrom} from 'aurelia-framework';

@customAttribute('mdl-header')
@inject(DOM.Element)
export class MDLLayoutHeader {
  @bindable transparent = false;

  constructor(element){
    this.element = element;
    this.element.classList.add('mdl-layout__header');
  }

  //lifecycle
  bind(bindingContext: Object, overrideContext: Object) {
    this.transparentChanged(this.transparent);
  }

  //getters
  @computedFrom('transparent')
  get isTransparent() {
    return ((this.transparent === true) || (this.transparent === 'true'))
  }

  //events

  transparentChanged(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }

    if ((newValue === true) || (newValue === 'true')) {
      this.element.classList.add('mdl-layout__header--transparent');
    } else {
      this.element.classList.remove('mdl-layout__header--transparent');
    }
  }
}
