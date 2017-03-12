import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-rtl')
@inject(DOM.Element)
export class MDLRTL {
  rtl = false;
  constructor(element){
    this.element = element;
  }

  valueChanged(newValue, oldValue){
    if (newValue === oldValue) {
      return;
    }
    this.rtl = ((newValue === true) || (newValue === 'true'));
    this._apply();
  }


  _apply() {
    if (this.rtl) {
      this.element.style.direction = 'rtl';
      this.element.style.textAlign = 'right';
      this.element.classList.add('mdl-rtl');
    } else {
      this.element.style.direction = '';
      this.element.style.textAlign = '';
      this.element.classList.remove('mdl-rtl');
    }

  }
}
