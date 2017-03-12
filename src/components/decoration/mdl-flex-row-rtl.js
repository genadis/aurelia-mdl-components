import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-flex-row-rtl')
@inject(DOM.Element)
export class MDLFlexRowRTL {
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
      this.element.style.flexDirection = 'row-reverse';
      this.element.classList.add('mdl-rtl');
    } else {
      this.element.style.flexDirection = '';
      this.element.classList.remove('mdl-rtl');
    }
  }
}
