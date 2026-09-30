class Catagory{

    constructor(page){
       this.page=page
       this.catBtn= page.getByText('Category 1')
       this.name=page.locator('[name="name"][minlength="2"]')
       this.email=page.locator('[name="email"]')
       this.password=page.getByPlaceholder('Password')
       this.iceCream=page.locator('#exampleCheck1')
       this.gender=page.locator('#exampleFormControlSelect1')
       this.empStatus=page.locator('#inlineRadio2')
       this.submitBtn=page.locator('[type="submit"]')
       
    }

    async catagoryBtn(){
        await this.catBtn.click()
    }

    async enterName(){
        await this.name.fill('Kailash')
    }

    async enterMail(){
        await this.email.fill('kailash@gmail.com')
    }

    async enterPassword(){
        await this.password.fill('Kailash@123')
    }

    async iceCreanCheckbox(){
        await this.iceCream.check()
    }

    async selectGender(){
        await this.gender.selectOption({index:0})
    }

    async empStatusRadio(){
        await this.empStatus.check()
    }

    async submit(){
        await this.submitBtn.click()
    }



}
module.exports= Catagory