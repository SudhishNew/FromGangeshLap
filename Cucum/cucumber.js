const { TIMEOUT } = require("node:dns");

module.exports = {
  default: {
    require: [
      'tests/StepDefnition/**/*.js',
      'feature/Support/Hooks.js',
    ],
    paths:['feature/**/*.feature'],//feature\Login.feature
    format: ['progress', 'allure-cucumberjs/reporter'],
    // parallel: 2,
    dryRun:false,
    formatOptions: {
      resultsDir: 'allure-results'
    },
    TIMEOUT: 90000
  }
};