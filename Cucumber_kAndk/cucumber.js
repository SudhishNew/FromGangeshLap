module.exports = {
  default: {
 paths:[
        "feature/**/*.feature",
        // "feature/catagory.feature"

],
    require: [
  "StepDefnition/**/*.js",
  // "StepDefnition/catagoryStep.js",/
  "feature/Support/Hooks.js"
    //   "features/support/*.js"
    ],
    format: [
      "progress"
    ]
  }
}