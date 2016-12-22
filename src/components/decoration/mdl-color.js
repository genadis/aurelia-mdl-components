import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-color')
@inject(DOM.Element)
export class MDLColor {
  constructor(element){
    this.element = element;
  }

  valueChanged(newValue, oldValue){
    this.element.style.color = newValue;
  }
}
