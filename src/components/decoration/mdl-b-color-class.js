import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-b-color-class')
@inject(DOM.Element)
export class MDLBColorClass {
  constructor(element){
    this.element = element;
  }

  valueChanged(newValue, oldValue){
    this.element.classList.add(`mdl-color--${newValue}`);
    if (oldValue) {
      this.element.classList.remove(`mdl-color--${oldValue}`);
    }
  }
}
