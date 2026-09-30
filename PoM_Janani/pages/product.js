export class ProductPage{

    constructor(page){
        this.page=page
        this.product=page.locator('#add-to-cart-sauce-labs-bike-light')
        this.addToCart=page.locator('[aria-label="Cart, 1 items"]')
        this.checkoutBtn=page.locator('#checkout')
        this.fname=page.locator('#first-name')
        this.lname=page.getByPlaceholder('Last Name')
        this.pin=page.getByLabel('Zip/Postal Code')
        this.continueBtn=page.locator('#continue')
        this.finishBtn=page.locator('#finish')


    }

    async selectproduct(){
        await this.product.click()
    }
    async cart(){
        await this.addToCart.click()
    }

    async checkOut(){
        await this.checkoutBtn.click()
    }

    async enterDetails(fname,lname,pin){
        await this.fname.fill(fname)
        await this.lname.fill(lname)
        await this.pin.fill(pin)
    }

    async completeOrder(){
        await this.continueBtn.click()
        await this.finishBtn.click()
    }
}