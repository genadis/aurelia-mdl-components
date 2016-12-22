import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-text')
@inject(DOM.Element)
export class MDLBodyText {

  styles = [
    'body-1', 'caption', 'headline', 'menu', 'subhead', 'body-1-force-preferred-font',
    'body-2', 'body-2-color-contrast', 'body-2-force-preferred-font', 'button', 'caption-color-contrast',
    'display-1', 'display-1-color-contrast', 'display-2', 'display-3', 'display-4', 'subhead-color-contrast',
    'title', 'title-color-contrast'
  ];

  constructor(element){
    this.element = element;
  }

  valueChanged(newValue, oldValue){
    if (this.styles.indexOf(newValue) !== -1) {
      this.element.classList.toggle(`mdl-typography--${newValue}`, true);
    }
    if (oldValue) {
      this.element.classList.remove(`mdl-typography--${oldValue}`);
    }
  }
}
