const {expect} = require ('@playwright/test')

export class CheckOut{

    constructor(page){
        this.page=page
        this.check=page.locator('#checkout')
        this.firstname=page.locator('#first-name')
        this.lastname=page.locator('#last-name')
        this.pincode=page.locator('#postal-code')
        this.contbtn=page.locator('#continue')
        this.finishbtn=page.locator('#finish')
        this.ordercomplete=page.getByText('Thank you for your order!')

    }

    async checkOut(){
        await this.check.click()
    }

    async fistName(fname){
        await this.firstname.fill(fname)
    }

    async lastName(lname){
        await this.lastname.fill(lname)
    }

    async pinCode(pin){
        await this.pincode.fill(pin)
    }

    async completeCheckOut(){
        await this.contbtn.click()
        await this.finishbtn.click()
    }

    async successMsgValidation(){
        const succesMsg=await this.ordercomplete.innerText()
        await expect(this.ordercomplete).toContainText('Thank you')

    }

}