module.exports={
    default:{
        paths:[
            "feature/Login.feature",
            "feature/dataDriven.feature"
        ],
        require:[
            "StepDef/LoginStesp.js",
            "StepDef/DataDrivenStep.js",
            "feature/support/Hooks.js"

        ],
        format:[
           "progress"

        ]
    }
}
