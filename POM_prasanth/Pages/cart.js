const {expect} =require ('@playwright/test') 

export class Cart{

    constructor(page){
        this.page=page
     this.prod=page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
       this.addToCart= page.locator('[data-test="shopping-cart-link"]')
       this.qnty=page.locator('div[class="cart_list"] div:nth-child(3) div:nth-child(1)[data-test="item-quantity"]')

    }

    async selectProduct(){
        await this.prod.click()
    }

    async cart(){
        await this.addToCart.click()
    }

    async validate(){
        const quantity=await this.qnty.innerText()
        await expect(Number(quantity)).toBeGreaterThan(0)
    }

}