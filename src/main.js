import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());

  aurelia.start().then(a => a.setRoot());
}
