import{test} from "@playwright/test"

test('State Check', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const editable=await page.locator('#name').isEditable()
    console.log(editable);
    const enable=await page.locator('[class="start"]').isHidden()
    console.log(enable);
    await page.getByRole('checkbox',{name:'Monday'})
    const checked=await page.getByRole('checkbox',{name:'Monday'}).isChecked()
    console.log(checked);
    

    
    
})