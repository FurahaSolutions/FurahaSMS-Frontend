const plugins = [
  require('karma-jasmine'),
  require('karma-chrome-launcher'),
  require('karma-coverage'),
  require('@angular-devkit/build-angular/plugins/karma'),
];
const ChromeHeadlessNoSandbox = {
  base: 'ChromeHeadless',
  flags: ['--no-sandbox']
};
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins,
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        // reporters not supporting the `file` property
        {type: 'html', subdir: 'report-html'},
        {type: 'lcov', subdir: 'report-lcov'}
      ]
    },
    preprocessors: {
      'src/**/*.ts': ['coverage']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
