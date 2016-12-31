import {customElement, bindable, computedFrom} from 'aurelia-framework';

@customElement('mdl-card')
export class MDLCard {

  @bindable shadow;

  @computedFrom('shadow')
  get shadowClass() {
    const shadow = this.shadow;
    if (!shadow || (shadow === '')) {
      return '';
    }

    return `mdl-shadow--${shadow}`;
  }
}
