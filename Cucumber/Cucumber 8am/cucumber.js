const { TIMEOUT } = require("node:dns");

module.exports = {
  default: {
    path:["features/**/login.feature",],
    require: [
      "tests/Stepdefnition/LoginStep.js",
      "features/support/Hooks.js"
    ],
    format: [
      "progress",
      "allure-cucumberjs/reporter"
    ],
       formatOptions: {
      resultsDir: "allure-results"
    }	
    // TIMEOUT:30000
  }
}