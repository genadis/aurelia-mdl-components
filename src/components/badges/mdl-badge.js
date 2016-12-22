import {customAttribute, inject, DOM, bindable} from 'aurelia-framework';

@customAttribute('mdl-badge')
@inject(DOM.Element)
export class MDLBadge {

  @bindable data;
  @bindable noBackground;
  @bindable overlap;

  constructor(element){
    this.element = element;
  }

  bind(bindingContext: Object, overrideContext: Object) {
    if (this.data) {
      this.element.classList.toggle('mdl-badge', true);
      this.element.setAttribute('data-badge', this.data);
    }
    this.noBackgroundChanged(this.noBackground);
    this.overlapChanged(this.overlap);
  }
  unbind() {
    this.data = undefined;
    this.element.classList.remove('mdl-badge');
    this.element.classList.remove('mdl-badge--no-background');
    this.element.classList.remove('mdl-badge--overlap');
  }

  dataChanged(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    this.element.classList.toggle('mdl-badge', true);
    this.element.setAttribute('data-badge', newValue);
  }

  noBackgroundChanged(newValue, oldValue) {
    this.element.classList.toggle('mdl-badge--no-background', ((newValue === true) || (newValue === 'true')));
  }

  overlapChanged(newValue, oldValue) {
    this.element.classList.toggle('mdl-badge--overlap', ((newValue === true) || (newValue === 'true')));
  }
}
