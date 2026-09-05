import{test,expect} from "@playwright/test"
test("DropDown", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#country').scrollIntoViewIfNeeded()
    //select by value
    // await page.locator('#country').selectOption('Germany')
    //select by label
    //  await page.locator('#country').selectOption({label:'United Kingdom'})
     //select by index
          await page.locator('#country').selectOption({index:4})
    await page.waitForTimeout(3000)
})

test('MultipleDD', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // const selectedValues=await page.locator('[id="colors"]').selectOption([{value:'blue'},{label:'Yellow'},{index:2}])
    // for(let i of selectedValues){
    //     if(i=='green'){
    //         console.log(i)
    //     }
    // }

    const TotalValues=await page.locator('[id="colors"]').selectOption({value:'red'})
    console.log(TotalValues)
    await expect( page.locator('[id="colors"]')).toHaveValues(['red'])
     const countOfValues=await page.locator('[id="colors"] option').count()
    console.log(countOfValues)
    // for(let i=0; i<countOfValues;i++ ){   //[1,2,3,dup,2,5,4]
    //     for(let j=i+1; j<countOfValues;j++){
    //          if(TotalValues[i]==TotalValues[j]){
    //             TotalValues[j]="Duplicate"

    //          }
    //     }    
    //     }
    //      for(let k=0;k<countOfValues;k++){
    //         if(TotalValues[k]!="Duplicate"){
    //             console.log(TotalValues[k])
    //         }
    //     }
    await page.waitForTimeout(3000)
    
})
// let arr=[1,2,3,dup,dup,5,4]  //=> [1,2,3,dup,2,5,4]
//                             //=>[1,2,3,dup,dup,5,4]
//                             //=>[1,2,3,dup,dup,5,4]
//                             //=>[1,2,3,dup,dup,5,4]
//                             //=>[1,2,3,dup,dup,5,4]
//                             //=>[1,2,3,dup,dup,5,4]
//                             //=>[1,2,3,dup,dup,5,4]
//                 for(let i of arr){
//                     if(i!='dup'){
//                         console.log(i)
//                     }
//                 }

test('MulDD',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const alltext=await page.locator("[id='colors'] option").allInnerTexts()
    await expect.soft(page.locator("[id='colors'] option") ).toHaveText(['Red','Green','Yellow','Red','White','Green'])
    await page.waitForTimeout(3000)
    console.log(alltext)

})

test.only('Simple Alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(alert)=>{
        const type=await alert.type()
        console.log(type)
        const msg=await alert.message()
        console.log(msg)
        await page.waitForTimeout(2000)
        await alert.accept()
        

    })
     await page.locator('[id="alertBtn"]').click()

})