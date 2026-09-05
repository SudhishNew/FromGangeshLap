const { expect } = require('@playwright/test');

class AdactinBookingConfirmation {
  constructor(page) {
    this.page = page;
    this.heading = page.getByText('Booking Confirmation');
    this.hotelName = page.locator('#hotel_name_dis');
    this.location = page.locator('#location_dis');
    this.roomType = page.locator('#room_type_dis');
    this.firstName = page.locator('#first_name_dis');
    this.lastName = page.locator('#last_name_dis');
    this.orderNumber = page.locator('#order_no');
  }

  async expectBooking({ hotel, location, roomType, firstName, lastName }) {
    await expect(this.heading).toBeVisible();
    await expect(this.hotelName).toHaveValue(hotel);
    await expect(this.location).toHaveValue(location);
    await expect(this.roomType).toHaveValue(roomType);
    await expect(this.firstName).toHaveValue(firstName);
    await expect(this.lastName).toHaveValue(lastName);
    await expect(this.orderNumber).not.toHaveValue('');
  }
}

module.exports = { AdactinBookingConfirmation };