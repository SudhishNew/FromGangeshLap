const { TIMEOUT } = require("node:dns");

module.exports={
    default:{
paths:["tests/feature/**/*.feature"], //tests\feature\loginPage.feature
require:["tests/StepDefenition/**/*.js","tests/hooks/**/*.js"],
format:["progress","allure-cucumberjs/reporter"],
parallel:2,
TIMEOUT:90000
}
}