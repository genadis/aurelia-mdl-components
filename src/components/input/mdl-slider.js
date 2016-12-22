import {bindable, customElement, bindingMode, inject, observable, TaskQueue} from 'aurelia-framework';

@customElement('mdl-slider')
@inject(TaskQueue)
export class MDLSlider {
  @bindable min = 0;
  @bindable max = 10;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value = 0;
  @bindable step = 1;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) focus = false;
  @bindable focusChange;
  @bindable disabled = false;

  @observable inputValue;
  inputElement;

  constructor(taskQueue: TaskQueue) {
    this.taskQueue = taskQueue;
  }

  // lifecycle

  attached() {
    this.taskQueue.queueTask(() => {
      this.valueChanged(this.value);
    });
  }

  valueChanged(newValue, oldValue) {
    if (this.inputElement && this.inputElement.MaterialSlider && (this.inputValue !== newValue)) {
      this.inputElement.MaterialSlider.change(newValue);
      this.inputValue = newValue;
    }
  }

  inputValueChanged(newValue, oldValue) {
    if ((newValue !== oldValue) && (newValue !== this.value)) {
      this.value = newValue;
    }
  }

  focusChanged(newValue, oldValue) {
    if (typeof this.focusChange === 'function') {
      this.focusChange({value: newValue, old: oldValue});
    }
  }


}
