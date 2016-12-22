import {customAttribute, inject, DOM, bindable} from 'aurelia-framework';

@customAttribute('mdl-grid')
@inject(DOM.Element)
export class MDLGrid {
  @bindable noSpacing;
  @bindable alignContent;

  constructor(element){
    this.element = element;
    this.element.classList.add('mdl-grid');
  }

  noSpacingChanged(newValue, oldValue) {
    if (oldValue) {
      this.element.classList.remove('mdl-grid--no-spacing');
    }
    if ((newValue === 'true') || (newValue === true)) {
      this.element.classList.add('mdl-grid--no-spacing');
    }
  }

  alignContentChanged(newValue, oldValue) {
    switch (newValue) {
    case 'start':
    case 'end':
      this.element.style.alignContent = `flex-${newValue}`;
      break;
    case 'center':
      this.element.style.alignContent = newValue;
      break;
    default:
      this.element.style.alignContent = 'stretch';
    }
  }

}
