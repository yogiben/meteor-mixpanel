Package.describe({
  name: 'yogiben:mixpanel',
  version: '0.1.2',
  summary: 'MixPanel on client and server',
  git: 'https://github.com/yogiben/meteor-mixpanel',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('client/mixpanel-loader.js','client');
  api.addFiles('client/mixpanel.js','client');

  api.addFiles('server/mixpanel.js','server');

});

Npm.depends({mixpanel: '0.1.1'})

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yogiben:mixpanel');
  api.addFiles('mixpanel-tests.js');
});
