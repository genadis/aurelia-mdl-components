import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdl-header-row')
@inject(DOM.Element)
export class MDLLayoutHeaderRow {

  constructor(element){
    this.element = element;
    this.element.classList.add('mdl-layout__header-row');
  }
}
