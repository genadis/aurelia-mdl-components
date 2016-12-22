import {bindable, customElement, DOM, inject, computedFrom, bindingMode} from 'aurelia-framework';
import {guid} from '../util';

@customElement('mdl-expandable')
@inject(DOM.Element)
export class MDLExpandable {
  id = guid();

  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable onKeyUp;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) focus;
  @bindable onFocusChanged;
  @bindable icon;
  @bindable iconClass;
  @bindable align;
  @bindable dir;
  @bindable disabled;
  @bindable placeholder;

  inputElement;
  expandableElement;
  buttonElement;


  constructor(element) {
    this.element = element;
    this.element.style.display = 'inherit';
  }


  bind(bindingContext: Object, overrideContext: Object) {
    this.alignChanged(this.align);
    this.dirChanged(this.dir);
    this.disabledChanged(this.disabled);
  }

  //api
  setFocus() {
    this.focus = true;
    this.inputElement.focus();
  }

  clearFocus() {
    this.focus = false;
    this.inputElement.blur();
  }

  clear() {
    if (this.expandableElement && this.expandableElement.MaterialTextfield) {
      this.expandableElement.MaterialTextfield.change();
    }
  }

  focusChanged(newValue, oldValue) {
    if (typeof this.onFocusChanged === 'function') {
      this.onFocusChanged({value: newValue, old: oldValue});
    }
  }

  keyUp(event) {
    if (typeof this.onKeyUp === 'function') {
      this.onKeyUp({event: event});
    }
  }

  alignChanged(newValue, oldValue) {
    if ((newValue === 'left') || (newValue === 'right') || (newValue === 'center')) {
      this.element.style.textAlign = newValue;
    } else {
      this.element.style.textAlign = 'initial';
    }
  }

  dirChanged(newValue, oldValue) {
    if (!this.inputElement || (newValue === oldValue)) {
      return
    }
    if ((newValue === 'ltr') || (newValue === 'rtl')) {
      this.inputElement.setAttribute('dir', newValue);
    } else {
      this.inputElement.setAttribute('dir', 'auto');
    }
  }

  disabledChanged(newValue, oldValue) {
    if (this.inputElement) {
      this.inputElement.disabled = (newValue === 'true') || (newValue === true);
    }
    if (this.buttonElement) {
      this.buttonElement.disabled = (newValue === 'true') || (newValue === true);
    }
  }

}
