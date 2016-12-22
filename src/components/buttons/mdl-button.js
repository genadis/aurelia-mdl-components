import {bindable, customElement, DOM, inject, computedFrom, bindingMode} from 'aurelia-framework';
import extend from 'extend';

@customElement('mdl-button')
@inject(DOM.Element)
export class MDLButton {
  @bindable click;
  @bindable ripple;
  @bindable type;
  @bindable colorClass;
  @bindable color;
  @bindable disabled;
  @bindable text;
  @bindable icon;
  @bindable iconClass;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) buttonElement;
  @bindable align;
  @bindable buttonStyle;

  constructor(element) {
    this.element = element;
    this.element.style.display = 'inherit';
  }

  bind(bindingContext: Object, overrideContext: Object) {
    this.rippleChanged(this.ripple);
    this.disabledChanged(this.disabled);
    this.typeChanged(this.type);
    this.colorClassChanged(this.colorClass);
    this.buttonStyleChanged(this.buttonStyle);
    this.alignChanged(this.align);
  }

  rippleChanged(newValue, oldValue) {
    if (this.buttonElement) {
      this.buttonElement.classList.toggle('mdl-js-ripple-effect', (newValue === 'true') || (newValue === true));
    }
  }

  disabledChanged(newValue, oldValue) {
    if (this.buttonElement) {
      this.buttonElement.disabled = (newValue === 'true') || (newValue === true);
    }
  }

  typeChanged(newValue, oldValue) {
    if (this.buttonElement) {
      let add = [];
      let rem = ['mdl-button--fab', 'mdl-button--mini-fab', 'mdl-button--icon', 'mdl-button--raised'];
      switch (newValue) {
      case 'fab':
        add.push('mdl-button--fab');
        rem.splice(0, 1);
        break;
      case 'mini-fab':
        add.push('mdl-button--fab');
        add.push('mdl-button--mini-fab');
        rem.splice(0, 2);
        break;
      case 'icon':
        add.push('mdl-button--icon');
        rem.splice(2, 1);
        break;
      case 'raised':
        add.push('mdl-button--raised');
        rem.splice(3, 1);
        break;
      default:
      }
      for (let i = 0; i < add.length; i++) {
        const c = add[i];
        this.buttonElement.classList.add(c);
      }
      for (let i = 0; i < rem.length; i++) {
        const c = rem[i];
        this.buttonElement.classList.remove(c);
      }
    }
  }

  colorClassChanged(newValue, oldValue) {
    if (this.buttonElement) {
      this.buttonElement.classList.remove('mdl-button--colored');
      this.buttonElement.classList.remove('mdl-button--primary');
      this.buttonElement.classList.remove('mdl-button--accent');
      if (newValue === 'primary') {
        if (this.type && (this.type !== '')) {
          this.buttonElement.classList.add('mdl-button--colored');
        } else {
          this.buttonElement.classList.add('mdl-button--primary');
        }
      } else if (newValue === 'accent') {
        this.buttonElement.classList.add('mdl-button--accent');
      }
    }
  }

  buttonStyleChanged(newValue, oldValue) {
    if (this.buttonElement && newValue) {
      extend(this.buttonElement.style, newValue);
    }
  }

  clickHandle(e) {
    if (!this.disabled && (typeof this.click === 'function')) {
      this.click({event: e});
    }
  }

  @computedFrom('type')
  get hasIcon() {
    return (this.type === 'fab') || (this.type === 'mini-fab') || (this.type === 'icon');
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
}
