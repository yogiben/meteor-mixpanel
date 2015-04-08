Package.describe({
  name: 'yogiben:mixpanel',
  version: '0.0.1',
  summary: 'Loader for MixPanel',
  git: 'https://github.com/yogiben/meteor-mixpanel',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('mixpanel-loader.js','client');
  api.addFiles('mixpanel.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yogiben:mixpanel');
  api.addFiles('mixpanel-tests.js');
});
