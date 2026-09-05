export class Form{
    constructor(page){
       this.page=page
       this.cat= page.locator('//a[text()="Category 1"]')
       this.name=page.locator('//input[@name="name" and  @minlength="2"]')
       this.email=page.locator('[name="email"]')
      this.password= page.getByPlaceholder('Password')
      this.iceCream=page.locator('[for="exampleCheck1"]')
      this.gender=page.locator('#exampleFormControlSelect1')
      this.satus=page.locator('#inlineRadio1')
      this.date=page.locator('[name="bday"]')
      this.subbtn=page.locator('[value="Submit"]')

    }

   async catagory(){
       await  this.cat.click()
    }
   async nameEnter(nam){
       await this.name.fill(nam)
    }
    async mailEnter(eml){
        await this.email.fill(eml)
    }
    async passEnter(pd){
        await this.password.fill(pd)
    }
    async iceCheck(){
        await this.iceCream.check()
    }
    async genderDD(){
        await this.gender.selectOption({label:'Male'})
    }
    async statusRadio(){
        await this.satus.check()
    }
    // async dob(){
    //     await this.date.fill('14-08-1999')
    // }
    async submit(){
        await this.subbtn.click()
    }
}