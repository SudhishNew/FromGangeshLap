
module.exports={
    default:{

        path:["features/Login.feature",
            "features/Catagory.feature",
            "features/DataDriven.feature"
        ],
        require:["stepdefnition/loginStep.js",
            "stepdefnition/ShopStep.js",
            "stepdefnition/DataDrivenStep.js",
            "features/Support/Hooks.js"],

    format: [
      "progress",
      
      "allure-cucumberjs/reporter"
    ],
      formatOptions: {
      resultsDir: "allure-results"
    }		


    }

}