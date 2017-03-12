import {customAttribute, inject, DOM, bindable} from 'aurelia-framework';

@customAttribute('mdl-typography')
@inject(DOM.Element)
export class MDLTextTypography {
  @bindable align;
  @bindable color;
  @bindable colorClass;
  @bindable capitalize;
  @bindable lowercase;
  @bindable justify;
  @bindable nowrap;
  @bindable uppercase;

  constructor(element){
    this.element = element;
  }

  bind(bindingContext: Object, overrideContext: Object) {
    this.alignChanged(this.align);
    this.colorChanged(this.color);
    this.colorClassChanged(this.colorClass);
    this.capitalizeChanged(this.capitalize);
    this.lowercaseChanged(this.lowercase);
    this.justifyChanged(this.justify);
    this.nowrapChanged(this.nowrap);
    this.uppercaseChanged(this.uppercase);
  }

  alignChanged(newValue, oldValue) {
    if ((newValue === 'left') || (newValue === 'right') || (newValue === 'center')) {
      this.element.classList.add(`mdl-typography--text-${newValue}`);
    }
    if (oldValue) {
      this.element.classList.remove(`mdl-typography--text-${oldValue}`);
    }
  }

  colorChanged(newValue, oldValue) {
    if (newValue) {
      this.element.style.color = newValue;
    }
  }

  colorClassChanged(newValue, oldValue) {
    if (newValue) {
      this.element.classList.add(`mdl-color-text--${newValue}`);
    }
    if (oldValue) {
      this.element.classList.remove(`mdl-color-text--${oldValue}`);
    }
  }

  capitalizeChanged(newValue, oldValue) {
    if ((newValue === true) || (newValue === 'true')) {
      this.element.classList.add('mdl-typography--text-capitalize');
    } else {
      this.element.classList.remove('mdl-typography--text-capitalize');
    }
  }

  lowercaseChanged(newValue, oldValue) {
    if ((newValue === true) || (newValue === 'true')) {
      this.element.classList.add('mdl-typography--text-lowercase');
    } else {
      this.element.classList.remove('mdl-typography--text-lowercase');
    }
  }

  justifyChanged(newValue, oldValue) {
    if ((newValue === true) || (newValue === 'true')) {
      this.element.classList.add('mdl-typography--text-justify');
    } else {
      this.element.classList.remove('mdl-typography--text-justify');
    }
  }

  nowrapChanged(newValue, oldValue) {
    if ((newValue === true) || (newValue === 'true')) {
      this.element.classList.add('mdl-typography--text-nowrap');
    } else {
      this.element.classList.remove('mdl-typography--text-nowrap');
    }
  }

  uppercaseChanged(newValue, oldValue) {
    if ((newValue === true) || (newValue === 'true')) {
      this.element.classList.add('mdl-typography--text-uppercase');
    } else {
      this.element.classList.remove('mdl-typography--text-uppercase');
    }
  }

}
