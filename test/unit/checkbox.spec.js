import '../setup';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {TaskQueue} from 'aurelia-framework';

describe('mdl-checkbox', () => {
  let component;
  let taskQueue;
  let viewModel;

  beforeEach(() => {
    taskQueue = new TaskQueue();
    viewModel = { isChecked: false, cbLabel: 'checkbox label' };
    component = StageComponent
      .withResources('components/toggles/mdl-checkbox')
      .inView('<mdl-checkbox checked.bind="isChecked" text.bind="cbLabel"></mdl-checkbox>')
      .boundTo(viewModel);
  });

  it('renders the component', done => {
    component.create(bootstrap).then(() => {
      const input = component.element.querySelector('label input.mdl-checkbox__input');
      expect(input).not.toBe(null);
      const label = component.element.querySelector('label .mdl-checkbox__label');
      expect(label).not.toBe(null);
      expect(label.innerHTML).toBe('checkbox label');
      done();
    })
    .catch(e => {
      console.log(e.toString());
    });
  });

  it('changes state', done => {
    component.create(bootstrap).then(() => {
      expect(component.viewModel.checked).toBe(false);
      viewModel.isChecked = true;
      taskQueue.queueTask(() => {
        expect(component.viewModel.checked).toBe(true);
        done();
      });
    })
    .catch(e => {
      console.log(e.toString());
    });
  });

  afterEach(() => {
    component.dispose();
  });
});
