export class CheckOutPage{

    constructor(page){

        this.cartbtn=page.locator('[data-test="shopping-cart-link"]')
        this.checkOutBtn=page.locator('#checkout')
        this.firstName=page.getByPlaceholder('First Name')
        this.lastName=page.getByLabel('Last Name')
        this.zipCode=page.locator('#postal-code')
        this.continuebtn=page.locator('#continue')
        this.finishbtn= page.locator('#finish')

    }

    async cart(){
        await this.cartbtn.click()
    }
    async checkOut(){
        await this.checkOutBtn.click()

    }

    async  orderDetails(fname, lname, pinCode){
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.zipCode.fill(pinCode)

    }

    async complete(){
        await this.continuebtn.click()
        await this.finishbtn.click()
    }
}