Package.describe({
  name: '416serg:accounts-uber',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Login service for Uber accounts',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('416serg:uber', ['client', 'server']);

  api.addFiles('uber_login_button.css', 'client');

  api.addFiles("uber.js");
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('accounts-uber');
//   api.addFiles('accounts-uber-tests.js');
// });
