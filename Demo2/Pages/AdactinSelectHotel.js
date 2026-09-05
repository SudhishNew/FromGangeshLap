class AdactinSelectHotel {
  constructor(page) {
    this.page = page;
    this.hotelOption = page.locator('input[type="radio"]').first();
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async selectFirstHotel() {
    await this.hotelOption.check();
    await this.continueButton.click();
  }
}

module.exports = { AdactinSelectHotel };