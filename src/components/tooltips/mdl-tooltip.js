import {bindable, customElement, inject, DOM} from 'aurelia-framework';

@customElement('mdl-tooltip')
@inject(DOM.Element)
export class MDLTooltip {

  @bindable for;
  @bindable text;
  @bindable isLarge;
  @bindable position;

  classSet;
  classes = '';

  constructor(element) {
    this.element = element;
    this.element.style.display = 'inherit';
    this.classSet = new Set();
  }

  isLargeChanged(newValue, oldValue) {
    if ((newValue === true) || (newValue === 'true')) {
      this.classSet.add('mdl-tooltip--large');
    } else {
      this.classSet.delete('mdl-tooltip--large');
    }
    this.updateClasses();
  }

  positionChanged(newValue, oldValue) {
    if ((newValue === 'left') || (newValue === 'right') ||
        (newValue === 'top') || (newValue === 'bottom')) {
      this.classSet.delete(`mdl-tooltip--top`);
      this.classSet.delete(`mdl-tooltip--bottom}`);
      this.classSet.delete(`mdl-tooltip--right`);
      this.classSet.delete(`mdl-tooltip--left`);
      this.classSet.add(`mdl-tooltip--${newValue}`);
    }
    this.updateClasses();
  }

  updateClasses() {
    const arr = Array.from(this.classSet);
    this.classes = arr.join(' ');
  }
}
