const { TIMEOUT } = require("node:dns");

module.exports={
    default:{
paths:["tests/Features/**/*.feature"],
require:["tests/StepDefenition/**/*.js","tests/hooks/**/*.js"],
format:["progress","summary"],
parallel:2,
TIMEOUT:90000
}
}