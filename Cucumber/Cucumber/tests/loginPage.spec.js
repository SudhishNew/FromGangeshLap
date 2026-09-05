const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LogiPage');
const { Search } = require('./pages/SearchHotel');

// Feature: Adactin Login page
// Tag: @Login
test.describe('@Login | Adactin Login page', () => {
  let loginPage;
  let searchPage;

  test.beforeEach(async ({ page }) => {
    // Initialize page objects
    loginPage = new LoginPage(page);
    searchPage = new Search(page);
  });

  test('should verify login feature with valid data', async () => {
    // Given: User navigates to the adaction web page
    await loginPage.navigate();

    // When: User Enters the userName And Password and Clicks the login button
    // Using valid test credentials
    const validUserName = 'apl'; // Update with actual test data
    const validPassword = 'password@123'; // Update with actual test data
    await loginPage.login(validUserName, validPassword);

    // When: User Searches the Hotel and clicks the submit button
    // Fill in hotel search details
    await searchPage.SearchHotel(
      'Sydney', // location
      'Hotel Creek', // hotels
      'Standard', // roomtype
      '1', // Roomnos
      '15/04/2026', // indate
      '20/04/2026', // outdate
      '1', // Adults
      '0' // child
    );
  });
});
