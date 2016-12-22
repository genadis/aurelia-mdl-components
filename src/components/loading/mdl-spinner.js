import {inject, bindable, customElement, DOM} from 'aurelia-framework';

@customElement('mdl-spinner')
@inject(DOM.Element)
export class MDLSpinner {
  @bindable active = true;

  constructor(element) {
    this.element = element;
    // make sure spinner dir is always ltr (rtl breaks it).
    element.style.direction = 'ltr';
  }
}
