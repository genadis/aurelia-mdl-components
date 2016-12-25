import {bindable, DOM, inject, customElement, bindingMode} from 'aurelia-framework';
import {guid} from '../util';

@customElement('mdl-checkbox')
@inject(DOM.Element)
export class MDLCheckbox {
  id = guid();
  @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) disabled = false;
  @bindable inputElement;
  @bindable ripple;
  @bindable text;

  //view
  labelElement;

  constructor(element) {
    this.element = element;
    this.element.style.display = 'inherit';
  }

  bind(bindingContext: Object, overrideContext: Object) {
    this.rippleChanged(this.ripple);
    this.checkedChanged(this.checked);
    this.disabledChanged(this.disabled);
  }

  rippleChanged(newValue, oldValue) {
    if (this.labelElement) {
      this.labelElement.classList.toggle('mdl-js-ripple-effect', (newValue === true) || (newValue === 'true'));
    }
  }

  checkedChanged(newValue, oldValue) {
    if (!this.inputElement) {
      return;
    }
    if (this.inputElement.checked != newValue) {
      this.inputElement.checked = newValue;
    }
    if (this.labelElement && this.labelElement.MaterialCheckbox) {
      this.labelElement.MaterialCheckbox.updateClasses_();
    }
  }

  disabledChanged(newValue, oldValue) {
    if (!this.inputElement) {
      return;
    }
    if (this.inputElement.disabled !== newValue) {
      this.inputElement.disabled = newValue;
    }
    if (this.labelElement && this.labelElement.MaterialCheckbox) {
      this.labelElement.MaterialCheckbox.updateClasses_();
    }
  }

}
