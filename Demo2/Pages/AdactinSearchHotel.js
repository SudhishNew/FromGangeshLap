class AdactinSearchHotel {
  constructor(page) {
    this.page = page;
    this.location = page.locator('#location');
    this.hotel = page.locator('#hotels');
    this.roomType = page.locator('#room_type');
    this.rooms = page.locator('#room_nos');
    this.checkIn = page.locator('#datepick_in');
    this.checkOut = page.locator('#datepick_out');
    this.adults = page.locator('#adult_room');
    this.children = page.locator('#child_room');
    this.searchButton = page.locator('#Submit');
  }

  async search({ location, hotel, roomType, rooms, checkIn, checkOut, adults, children }) {
    await this.location.selectOption({ label: location });
    await this.hotel.selectOption({ label: hotel });
    await this.roomType.selectOption({ label: roomType });
    await this.rooms.selectOption({ label: rooms });
    await this.checkIn.fill(checkIn);
    await this.checkOut.fill(checkOut);
    await this.adults.selectOption({ label: adults });
    await this.children.selectOption({ label: children });
    await this.searchButton.click();
  }
}

module.exports = { AdactinSearchHotel };