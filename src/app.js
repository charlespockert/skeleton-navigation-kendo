export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'],   name: 'welcome',      moduleId: 'welcome',                              nav: true, title: 'Welcome' },
      { route: 'users',           name: 'users',        moduleId: 'users',                                nav: true, title: 'Github Users' },
      { route: 'k-autocomplete',  name: 'k-button',     moduleId: 'kendoui/autocomplete/k-autocomplete',  nav: true, title: 'KendoUI autocomplete' },
      { route: 'k-button',        name: 'k-button',     moduleId: 'kendoui/button/k-button',              nav: true, title: 'KendoUI button' },
      { route: 'k-chart',         name: 'k-chart',      moduleId: 'kendoui/chart/k-chart',                nav: true, title: 'KendoUI chart' },
      { route: 'k-grid',          name: 'k-grid',       moduleId: 'kendoui/grid/k-grid',                  nav: true, title: 'KendoUI grid' },
      { route: 'child-router',    name: 'child-router', moduleId: 'child-router',                         nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
