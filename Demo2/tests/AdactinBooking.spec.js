const { test, expect } = require('@playwright/test');
const { AdactinLogin } = require('../Pages/AdactinLogin');
const { AdactinSearchHotel } = require('../Pages/AdactinSearchHotel');
const { AdactinSelectHotel } = require('../Pages/AdactinSelectHotel');
const { AdactinBookHotel } = require('../Pages/AdactinBookHotel');
const { AdactinBookingConfirmation } = require('../Pages/AdactinBookingConfirmation');

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}/${date.getFullYear()}`;
}

test('login and complete a hotel booking', async ({ page }) => {
  const password = process.env.ADACTIN_PASSWORD;
  test.skip(!password, 'Set ADACTIN_PASSWORD before running this test');

  const checkInDate = new Date();
  const checkOutDate = new Date(checkInDate);
  checkOutDate.setDate(checkOutDate.getDate() + 1);

  const login = new AdactinLogin(page);
  const searchHotel = new AdactinSearchHotel(page);
  const selectHotel = new AdactinSelectHotel(page);
  const bookHotel = new AdactinBookHotel(page);
  const bookingConfirmation = new AdactinBookingConfirmation(page);

  await login.navigate();
  await login.login(process.env.ADACTIN_USERNAME || 'sudhishrock', password);
  await expect(page).toHaveURL(/SearchHotel\.php/);

  await searchHotel.search({
    location: 'Sydney',
    hotel: 'Hotel Creek',
    roomType: 'Standard',
    rooms: '1 - One',
    checkIn: formatDate(checkInDate),
    checkOut: formatDate(checkOutDate),
    adults: '1 - One',
    children: '0 - None',
  });
  await expect(page).toHaveURL(/SelectHotel\.php/);

  await selectHotel.selectFirstHotel();
  await expect(page).toHaveURL(/BookHotel\.php/);

  await bookHotel.book({
    firstName: 'Sudhish',
    lastName: 'Rock',
    address: '1 Test Street, Sydney',
    cardNumber: '4111111111111111',
    cardType: 'VISA',
    expiryMonth: 'December',
    expiryYear: '2028',
    cvv: '123',
  });

  await expect(page).toHaveURL(/BookingConfirm\.php/, { timeout: 30000 });
  await bookingConfirmation.expectBooking({
    hotel: 'Hotel Creek',
    location: 'Sydney',
    roomType: 'Standard',
    firstName: 'Sudhish',
    lastName: 'Rock',
  });
});