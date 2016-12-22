import {bindable, customElement} from 'aurelia-framework';

@customElement('mdl-spinner')
export class MDLSpinner {
  @bindable active = true;
}
