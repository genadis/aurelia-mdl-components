import {bindable, customElement, DOM, inject, bindingMode} from 'aurelia-framework';
import {guid} from '../util';

@customElement('mdl-icon-toggle')
@inject(DOM.Element)
export class MDLIconToggle {
  id = guid();

  @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) disabled = false;
  @bindable iconClass;
  @bindable icon;
  @bindable ripple;

  //view
  labelElement;
  iconElement;
  inputElement;

  constructor(element) {
    this.element = element;
    this.element.style.display = 'inherit';
    this.element.style.outlineStyle = 'none';
  }

  bind(bindingContext: Object, overrideContext: Object) {
    this.rippleChanged(this.ripple);
    this.checkedChanged(this.checked);
    this.disabledChanged(this.disabled);
  }

  rippleChanged(newValue, oldValue) {
    if (!this.labelElement) {
      return;
    }
    if ((newValue === true) || (newValue === 'true')) {
      this.labelElement.classList.add('mdl-js-ripple-effect');
    } else {
      this.labelElement.classList.remove('mdl-js-ripple-effect');
    }
  }

  checkedChanged(newValue, oldValue) {
    if (!this.inputElement) {
      return;
    }
    if (this.inputElement.checked !== newValue) {
      this.inputElement.checked = newValue;
    }
    if (this.labelElement && this.labelElement.MaterialIconToggle) {
      this.labelElement.MaterialIconToggle.updateClasses_();
    }
  }

  disabledChanged(newValue, oldValue) {
    if (!this.inputElement) {
      return;
    }
    if (this.inputElement.disabled !== newValue) {
      this.inputElement.disabled = newValue;
    }
    if (this.labelElement && this.labelElement.MaterialIconToggle) {
      this.labelElement.MaterialIconToggle.updateClasses_();
    }
  }
}
