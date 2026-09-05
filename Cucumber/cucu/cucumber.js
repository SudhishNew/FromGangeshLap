const { TIMEOUT } = require("node:dns");

module.exports={
    default:{
paths:["tests/features/**/*.feature"],
require:["tests/StepDefenition/**/*.js","tests/hooks/**/*.js"],
format:["progress"],
parallel:2,
TIMEOUT:90000
}
}