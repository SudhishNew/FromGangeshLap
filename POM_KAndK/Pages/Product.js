export class ProductPage{

    constructor(page){
        this.tab=page
        this.bag=page.locator('#add-to-cart-sauce-labs-backpack')
        this.cycle=page.locator('#add-to-cart-sauce-labs-bike-light')
    }

    async addToCart(){
        await this.bag.click()
        await this.cycle.click()
    }
   
}