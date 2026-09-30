import {test} from "@playwright/test"
import { myTest } from "../fixture/loginFixture"

myTest('fixture', async({LoginFixture})=>{
    await LoginFixture.waitForTimeout(2000)
})