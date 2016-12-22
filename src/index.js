
export function configure(config) {
  config.plugin('aurelia-mdl');
  config.globalResources([
    './components/badges/mdl-badge',
    './components/buttons/mdl-button',
    './components/loading/mdl-spinner',
    './components/decoration/mdl-b-color-class',
    './components/decoration/mdl-color-class',
    './components/decoration/mdl-color',
    './components/decoration/mdl-flex-row-rtl',
    './components/decoration/mdl-rtl',
    './components/layout/mdl-header',
    './components/layout/mdl-header-row',
    './components/layout/mdl-layout',
    './components/layout/grid/mdl-cell',
    './components/layout/grid/mdl-grid',
    './components/layout/navigation/mdl-nav-link',
    './components/layout/navigation/mdl-nav',
    './components/sliders/mdl-slider',
    './components/text/mdl-text',
    './components/text/mdl-typography',
    './components/text-fields/mdl-expandable',
    './components/text-fields/mdl-textarea',
    './components/text-fields/mdl-textfield',
    './components/toggles/mdl-checkbox',
    './components/toggles/mdl-icon-toggle',
    './components/toggles/mdl-radio',
    './components/tooltips/mdl-tooltip',
    ]
  );
}

export * from './components/badges/mdl-badge';
export * from './components/buttons/mdl-button';
export * from './components/loading/mdl-spinner';
export * from './components/decoration/mdl-b-color-class';
export * from './components/decoration/mdl-color-class';
export * from './components/decoration/mdl-color';
export * from './components/decoration/mdl-flex-row-rtl';
export * from './components/decoration/mdl-rtl';
export * from './components/layout/mdl-header';
export * from './components/layout/mdl-header-row';
export * from './components/layout/mdl-layout';
export * from './components/layout/grid/mdl-cell';
export * from './components/layout/grid/mdl-grid';
export * from './components/layout/navigation/mdl-nav-link';
export * from './components/layout/navigation/mdl-nav',
export * from './components/sliders/mdl-slider';
export * from './components/text/mdl-text';
export * from './components/text/mdl-typography';
export * from './components/text-fields/mdl-expandable';
export * from './components/text-fields/mdl-textarea';
export * from './components/text-fields/mdl-textfield';
export * from './components/toggles/mdl-checkbox';
export * from './components/toggles/mdl-icon-toggle';
export * from './components/toggles/mdl-radio';
export * from './components/tooltips/mdl-tooltip';

