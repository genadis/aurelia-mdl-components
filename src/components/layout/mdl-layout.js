import {bindable, customElement, DOM, inject, bindingMode, computedFrom, BindingEngine, TaskQueue} from 'aurelia-framework';

@customElement('mdl-layout')
@inject(DOM.Element, BindingEngine, TaskQueue)
export class MDLLayout {

  @bindable onReady;
  //view
  @bindable fixedHeader = false;
  @bindable transparentHeader = false;
  @bindable fixedDrawer = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) isSmallScreen = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) isDrawerOpen = false;

  //view
  layoutElement;
  drawerElement;

  disposables = [];

  constructor(element, bindingEngine: BindingEngine, taskQueue: TaskQueue) {
    this.element = element;
    this.bindingEngine = bindingEngine;
    this.taskQueue = taskQueue;
  }

  //lifecycle
  bind(bindingContext: Object, overrideContext: Object) {
    this.fixedHeaderChanged(this.fixedHeader);
    this.fixedDrawerChanged(this.fixedDrawer);
  }

  unbind() {
  }

  attached() {
    this.disposables.push(this.bindingEngine.propertyObserver(this.layoutElement, 'className').subscribe(() => this.layoutClassChange()));
    this.disposables.push(this.bindingEngine.propertyObserver(this.drawerElement, 'className').subscribe(() => this.drawerClassChange()));

    this.taskQueue.queueTask(() => {
      this.layoutClassChange();
      this.drawerClassChange();
      setTimeout(() => {
        if (typeof this.onReady === 'function') {
          this.onReady();
        }
      }, 1);
    });
  }

  detached() {
    for (let i = 0; i < this.disposables.length; ++i) {
      this.disposables[i].dispose();
    }
    this.disposables = [];
  }

  //getters

  @computedFrom('fixedHeader')
  get isFixedHeader() {
    return ((this.fixedHeader === true) || (this.fixedHeader === 'true'))
  }

  //events

  fixedHeaderChanged(newValue, oldValue) {
    if (!this.layoutElement || (newValue === oldValue)) {
      return;
    }
    if ((newValue ===  true) || (newValue === 'true')) {
      this.layoutElement.classList.add('mdl-layout--fixed-header');
    } else {
      this.layoutElement.classList.remove('mdl-layout--fixed-header');
    }
  }

  fixedDrawerChanged(newValue, oldValue) {
    if (!this.layoutElement || (newValue === oldValue)) {
      return;
    }
    if ((newValue ===  true) || (newValue === 'true')) {
      this.layoutElement.classList.add('mdl-layout--fixed-drawer');
    } else {
      this.layoutElement.classList.remove('mdl-layout--fixed-drawer');
    }
  }

  layoutClassChange() {
    const isSmall = this._isSmallScreen();
    if (isSmall !== this.isSmallScreen) {
      this.isSmallScreen = isSmall;
    }
  }

  drawerClassChange() {
    const isOpen = this._isDrawerOpen();
    if (isOpen !== this.isDrawerOpen) {
      this.isDrawerOpen = isOpen;
    }
  }

  isDrawerOpenChanged(newValue, oldValue) {
    if ((newValue === false) && (oldValue === true) && this._isDrawerOpen() && this.layoutElement.MaterialLayout) {
      this.layoutElement.MaterialLayout.toggleDrawer();
    }
  }

  _isSmallScreen() {
    return this.layoutElement.classList.contains('is-small-screen');
  }

  _isDrawerOpen() {
    return this.drawerElement.classList.contains('is-visible');
  }

}
