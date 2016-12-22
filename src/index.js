
export function configure(config) {
  config.plugin('aurelia-mdl');
  config.globalResources([
    './components/mdl-badge',
    './components/mdl-button',
    './components/mdl-spinner',
    './components/mdl-tooltip',
    './components/decoration/mdl-b-color-class',
    './components/decoration/mdl-color-class',
    './components/decoration/mdl-color',
    './components/decoration/mdl-flex-row-rtl',
    './components/decoration/mdl-rtl',
    './components/grid/mdl-cell',
    './components/grid/mdl-grid',
    './components/input/mdl-expandable',
    './components/input/mdl-slider',
    './components/input/mdl-textarea',
    './components/input/mdl-textfield',
    './components/layout/mdl-header',
    './components/layout/mdl-header-row',
    './components/layout/mdl-layout',
    './components/navigation/mdl-link',
    './components/navigation/mdl-nav',
    './components/text/mdl-text',
    './components/text/mdl-typography',
    './components/toggle/mdl-checkbox',
    './components/toggle/mdl-icon-toggle',
    './components/toggle/mdl-radio'
    ]
  );
}

