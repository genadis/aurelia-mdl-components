import {bindable, customElement, DOM, inject, computedFrom, bindingMode, BindingEngine} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';
import {guid} from '../util';

@customElement('mdl-radio')
@inject(DOM.Element, BindingSignaler, BindingEngine)
export class MDLRadio {
  id = guid();

  @bindable ripple;
  @bindable colorClass;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) selection;
  @bindable options = [];
  @bindable rtl;

  buttonElements = [];
  radioElements = [];

  disposables = [];

  constructor(element, signaler: BindingSignaler, bindingEngine: BindingEngine) {
    this.element = element;
    this.element.style.display = 'inherit';
    this.signaler = signaler;
    this.bindingEngine = bindingEngine;
  }

  bind(bindingContext: Object, overrideContext: Object) {
  }

  unbind() {
  }

  attached() {
    this._attachObservers();
    this._updateSelected();
  }

  dettached() {
    this._dispose();
  }

  @computedFrom('ripple')
  get hasRipple() {
    return ((this.ripple === 'true') || (this.ripple === true));
  }

  @computedFrom('rtl')
  get isRTL() {
    return ((this.rtl === 'true') || (this.rtl === true));
  }

  rippleChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this._updateSignal();
    }
  }

  rtlChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this._updateSignal();
    }
  }

  colorClassChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this._updateSignal();
    }
  }

  optionsChanged(newValuem, oldValue) {
    this._dispose();
    this._attachObservers();
    this._updateSignal();
    this._updateSelection();
  }

  _updateSignal() {
    this.signaler.signal('mdl-comp-radio');
  }

  _attachObservers() {
    for (let i = 0; i < this.buttonElements.length; ++i) {
      const el = this.buttonElements[i];
      this.disposables.push(this.bindingEngine.propertyObserver(el, 'checked').subscribe(() => this._updateSelection()));
    }
  }


  _updateSelected() {
    if (!isNaN(this.selection) && this.radioElements[this.selection]) {
      if (this.radioElements[this.selection].MaterialRadio) {
        for (let i = 0; i < this.radioElements.length; ++i) {
          const el = this.radioElements[i];
          if (el.MaterialRadio && (typeof  el.MaterialRadio.uncheck === 'function')) {
            el.MaterialRadio.uncheck();
          }
        }
        const el = this.radioElements[this.selection];
        if (el.MaterialRadio && (typeof el.MaterialRadio.check === 'function')) {
          el.MaterialRadio.check();
        }
      } else {
        const el = this.buttonElements[this.selection];
        el.setAttribute('checked', true);
      }
    } else {
      this._updateSelection();
    }
  }
  _updateSelection() {
    for (let i = 0; i < this.buttonElements.length; ++i) {
      const el = this.buttonElements[i];
      if (el.checked) {
        this.selection = i;
        break;
      }
    }
  }

  _dispose() {
    for (let i = 0; i < this.disposables.length; i++) {
      this.disposables[i].dispose();
    }
    this.disposables = [];
    this.selection = undefined;
  }
}
