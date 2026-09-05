
class CatPage{
    constructor(page){
        this.page=page
        this.cat=page.locator('//a[text()="Category 1"]')
    }
    async catgory(){
        await this.cat.click()
    }
}

module.exports={CatPage}