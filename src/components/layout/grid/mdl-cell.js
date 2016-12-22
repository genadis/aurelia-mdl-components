import {customAttribute, inject, DOM, bindable} from 'aurelia-framework';

@customAttribute('mdl-cell')
@inject(DOM.Element)
export class MDLCell {
  @bindable col;
  @bindable colPhone;
  @bindable colTablet;
  @bindable offset;
  @bindable order;
  @bindable hideDesktop;
  @bindable hidePhone;
  @bindable hideTablet;
  @bindable stretch;
  @bindable align;
  constructor(element) {
    this.element = element;
    this.element.classList.add('mdl-cell');
  }

  throwError(prop, value) {
    throw Error(`${prop} value should be ${value}`);
  }

  colChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove(`mdl-cell--${oldValue}-col`);
    }
    const val = parseInt(newValue);
    if ((val >= 1) && (val <= 12)) {
      this.element.classList.add(`mdl-cell--${val}-col`);
    } else {
      this.throwError('col', '1 <> 12');
    }
  }

  colPhoneChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove(`mdl-cell--${oldValue}-col-phone`);
    }
    const val = parseInt(newValue);
    if ((val >= 1) && (val <= 4)) {
      this.element.classList.add(`mdl-cell--${val}-col-phone`);
    } else {
      this.throwError('colPhone', '1 <> 4');
    }
  }

  colTabletChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove(`mdl-cell--${oldValue}-col-tablet`);
    }
    const val = parseInt(newValue);
    if ((val >= 1) && (val <= 8)) {
      this.element.classList.add(`mdl-cell--${val}-col-tablet`);
    } else {
      this.throwError('colTablet', '1 <> 8');
    }
  }

  orderChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove(`mdl-cell--order-${oldValue}`);
    }
    const val = parseInt(newValue);
    if ((val >= 1) && (val <= 12)) {
      this.element.classList.add(`mdl-cell--order-${val}`);
    } else {
      this.throwError('order', '1 <> 12');
    }
  }

  offsetChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove(`mdl-cell--${oldValue}-offset`);
    }
    const val = parseInt(newValue);
    if ((val >= 1) && (val <= 11)) {
      this.element.classList.add(`mdl-cell--${val}-offset`);
    } else {
      this.throwError('offset', '1 <> 11');
    }
  }

  hideDesktopChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove('mdl-cell--hide-desktop');
    }
    if ((newValue === 'true') || (newValue === true)) {
      this.element.classList.add('mdl-cell--hide-desktop');
    }
  }

  hidePhoneChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove('mdl-cell--hide-phone');
    }
    if ((newValue === 'true') || (newValue === true)) {
      this.element.classList.add('mdl-cell--hide-phone');
    }
  }

  hideTabletChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove('mdl-cell--hide-tablet');
    }
    if ((newValue === 'true') || (newValue === true)) {
      this.element.classList.add('mdl-cell--hide-tablet');
    }
  }

  stretchChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove('mdl-cell--stretch');
    }
    if ((newValue === 'true') || (newValue === true)) {
      this.element.classList.add('mdl-cell--stretch');
    }
  }

  alignChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove(`mdl-cell--${oldValue}`);
    }
    if ((newValue === 'top') || (newValue === 'middle') || (newValue === 'bottom')) {
      this.element.classList.add(`mdl-cell--${newValue}`);
    }
  }

}
