Router.configure({
  layoutTemplate: 'layout',
  //layoutTemplate: 'layoutWithoutHeader',
  notFoundTemplate: '404',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});

Router.map(function() {

  // FRONTPAGE
  // -------------------------------------------------------
  this.route('frontpage', {
    path: '/',
    template: 'frontpage'
  });

  // ABOUT
  // -------------------------------------------------------
  this.route('about', {
    path: '/about',
    template: 'about'
  });

});
