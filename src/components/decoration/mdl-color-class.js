import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-color-class')
@inject(DOM.Element)
export class MDLColorClass {
  constructor(element){
    this.element = element;
  }

  valueChanged(newValue, oldValue){
    this.element.classList.toggle(`mdl-color-text--${newValue}`, true);
    if (oldValue) {
      this.element.classList.remove(`mdl-color-text--${oldValue}`);
    }
  }
}
