import {bindable, customElement, DOM, inject, computedFrom, bindingMode, BindingEngine} from 'aurelia-framework';
import {guid} from '../util';

@customElement('mdl-textfield')
@inject(DOM.Element, BindingEngine)
export class MDLTextfield {
  id = guid();
  @bindable placeholder;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) focus;
  @bindable focusChange;
  @bindable float;
  @bindable align;
  @bindable alignPlaceholder;
  @bindable dir;
  @bindable disabled;
  @bindable rtl;
  @bindable errors;
  labelElement;
  inputElement;
  textfieldElement;
  @bindable type = 'text';
  errorMsg;

  constructor(element, bindingEngine: BindingEngine) {
    this.element = element;
    this.bindingEngine = bindingEngine;
    this.element.style.display = 'inherit';
  }


  bind(bindingContext: Object, overrideContext: Object) {
    this.alignChanged(this.align);
    this.alignPlaceholderChanged(this.alignPlaceholder);
    this.dirChanged(this.dir);
  }

  focusChanged(newValue, oldValue) {
    if (typeof this.focusChange === 'function') {
      this.focusChange({value: newValue, old: oldValue});
    }
  }

  setFocus() {
    this.focus = true;
    this.inputElement.focus();
  }

  clearFocus() {
    this.focus = false;
    this.inputElement.blur();
  }

  clear() {
    if (this.textfieldElement && this.textfieldElement.MaterialTextfield) {
      this.textfieldElement.MaterialTextfield.change();
    }
  }

  @computedFrom('float')
  get doFloat() {
    return (this.float === 'true') || (this.float === true);
  }

  alignChanged(newValue, oldValue) {
    if ((newValue === 'left') || (newValue === 'right') || (newValue === 'center')) {
      this.element.style.textAlign = newValue;
      if (newValue === 'left') {
        this.element.style.justifyContent = 'flex-start';
      } else if (newValue === 'right') {
        this.element.style.justifyContent = 'flex-end';
      } else if (newValue === 'center') {
        this.element.style.justifyContent = 'center';
      }
    } else {
      this.element.style.textAlign = 'initial';
      this.element.style.justifyContent = 'initial';
    }
  }

  alignPlaceholderChanged(newValue, oldValue) {
    if (this.labelElement) {
      if ((newValue === 'left') || (newValue === 'right') || (newValue === 'center')) {
        this.labelElement.style.textAlign = newValue;
      } else {
        this.labelElement.style.textAlign = 'initial';
      }
    }
  }

  dirChanged(newValue, oldValue) {
    if (!this.inputElement || (newValue === oldValue)) {
      return;
    }
    if ((newValue === 'ltr') || (newValue === 'rtl')) {
      this.inputElement.setAttribute('dir', newValue);
    } else {
      this.inputElement.setAttribute('dir', 'auto');
    }
  }

  errorsChanged(newValue, oldValue) {
    if (!this.textfieldElement || (newValue === oldValue)) {
      return;
    }

    if (this.disposable) {
      this.disposable.dispose();
      this.disposable = undefined;
    }

    if (Array.isArray(newValue)) {
      this.disposable = this.bindingEngine.collectionObserver(this.errors).subscribe(() => this.updateErrorMsg());
      this.updateErrorMsg();
    }
  }

  updateErrorMsg() {
    setTimeout(() => {
      if (!this.textfieldElement) {
        return;
      }
      const hasErr = (this.errors.length !== 0);

      this.textfieldElement.classList.toggle('is-invalid', hasErr);
      if (hasErr) {
        this.errorMsg = this.errors.join(' ');
      }

      this.textfieldElement.style.marginBottom = `${hasErr ? 10 + 20 * Math.max(0, this.errors.length - 1) : 0}px`;
    }, 200);
  }

  onBlur() {
    setTimeout(() => {
      if (this.focus === false) {
        this.element.dispatchEvent(DOM.createCustomEvent('blur', {bubbles: false}));
      }
    }, 1);
  }
}
