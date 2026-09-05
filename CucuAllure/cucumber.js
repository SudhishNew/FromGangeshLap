module.exports = {
  default: {
    paths: ['Features/**/log.feature'],
    require: ['tests/step_definitions/**/login.steps.js',
      'Features/support/**/hooks.js'],
    format: ['progress',"allure-cucumberjs/reporter"],
    // publishQuiet: true
        formatOptions: {
      resultsDir: "allure-results"
    }
  }
};