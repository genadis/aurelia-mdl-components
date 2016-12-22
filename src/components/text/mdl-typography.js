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
      this.element.classList.toggle(`mdl-typography--text-${newValue}`, true);
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
      this.element.classList.toggle(`mdl-color-text--${newValue}`, true);
    }
    if (oldValue) {
      this.element.classList.remove(`mdl-color-text--${oldValue}`);
    }
  }

  capitalizeChanged(newValue, oldValue) {
    this.element.classList.toggle('mdl-typography--text-capitalize', ((newValue === true) || (newValue === 'true')));
  }

  lowercaseChanged(newValue, oldValue) {
    this.element.classList.toggle('mdl-typography--text-lowercase', ((newValue === true) || (newValue === 'true')));
  }

  justifyChanged(newValue, oldValue) {
    this.element.classList.toggle('mdl-typography--text-justify', ((newValue === true) || (newValue === 'true')));
  }

  nowrapChanged(newValue, oldValue) {
    this.element.classList.toggle('mdl-typography--text-nowrap', ((newValue === true) || (newValue === 'true')));
  }

  uppercaseChanged(newValue, oldValue) {
    this.element.classList.toggle('mdl-typography--text-uppercase', ((newValue === true) || (newValue === 'true')));
  }

}
