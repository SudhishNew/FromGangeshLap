 class Shop{
    constructor(page){
        this.page=page
        this.catagory=page.locator('//a[text()="Category 1"]')
        this.name=page.locator('(//input[@name="name"])[1]')
        
    }

    async catagoryLink(){
        await this.catagory.click()

    }
   async  enterName(nam){
    await this.name.fill(nam)
    }
}
module.exports= {Shop}