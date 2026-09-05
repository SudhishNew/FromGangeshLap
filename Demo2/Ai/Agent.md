# Adactin Hotel Application Test Cases

## Test Run Details

- Application: https://adactinhotelapp.com/
- Build exercised: Build 1
- Test date: 20/08/2026
- Username: `sudhishrock`
- Password: supplied valid credential (not stored in this document)
- Test data: Sydney / Hotel Creek / Standard / 1 room / 20/08/2026 to 21/08/2026 / 1 adult / 0 children
- Payment data: VISA, 16-digit dummy card, December 2028, CVV 123
- Important: The site identifies Build 1 as having known defects.

## Test Cases

### TC-001: Login with valid credentials

| Field | Details |
|---|---|
| Preconditions | User is on the Adactin login page. |
| Steps | 1. Enter username `sudhishrock`.<br>2. Enter the supplied valid password.<br>3. Select **Login**. |
| Expected result | User is authenticated and redirected to **Search Hotel**. The header displays `Hello sudhishrock!`. |
| Actual result | Pass. User reached `SearchHotel.php` and the authenticated header was displayed. |

### TC-002: Search for an available hotel

| Field | Details |
|---|---|
| Preconditions | TC-001 passed. |
| Steps | 1. Select Location `Sydney`.<br>2. Select Hotel `Hotel Creek`.<br>3. Select Room Type `Standard`.<br>4. Keep Number of Rooms as `1 - One`.<br>5. Keep dates as `20/08/2026` and `21/08/2026`.<br>6. Keep Adults per Room as `1 - One` and Children per Room as `0 - None`.<br>7. Select **Search**. |
| Expected result | A matching hotel result is displayed with the requested location, room type, occupancy, and dates. |
| Actual result | Pass. One result was displayed: Hotel Creek, Sydney, 1 room, Standard, 1 day, AUD $125 per night, AUD $135 total before GST. |

### TC-003: Select the hotel search result

| Field | Details |
|---|---|
| Preconditions | TC-002 passed and a matching result is displayed. |
| Steps | 1. Select the radio button for Hotel Creek.<br>2. Select **Continue**. |
| Expected result | The booking details page opens and carries forward the selected hotel, location, room type, dates, room count, and price. |
| Actual result | Pass. `BookHotel.php` opened with the selected search details. Final billed price displayed was AUD $148.5, including AUD $13.5 GST. |

### TC-004: Complete and submit booking details

| Field | Details |
|---|---|
| Preconditions | TC-003 passed. |
| Steps | 1. Enter First Name `Sudhish`.<br>2. Enter Last Name `Rock`.<br>3. Enter Billing Address `1 Test Street, Sydney`.<br>4. Enter the 16-digit dummy card number `4111111111111111`.<br>5. Select Credit Card Type `VISA`.<br>6. Select expiry `December 2028`.<br>7. Enter CVV `123`.<br>8. Select **Book Now**.<br>9. Wait for booking processing to finish. |
| Expected result | Booking is submitted, a confirmation page is displayed, and all submitted booking and guest details are retained. An order number is generated. |
| Actual result | Partially passed with defects. Confirmation page displayed order `EIL852FBC0` and the expected prices, dates, hotel, and address. It incorrectly displayed Room Type `Deluxe` instead of `Standard` and displayed a blank Last Name instead of `Rock`. |

### TC-005: Verify booking in My Itinerary

| Field | Details |
|---|---|
| Preconditions | TC-004 produced order `EIL852FBC0`. |
| Steps | 1. Select **My Itinerary** from the confirmation page.<br>2. Locate order `EIL852FBC0`. |
| Expected result | The order is listed with the same hotel, room type, dates, guest names, occupancy, and total price as the confirmation page. |
| Actual result | Partially passed. The order was listed and showed Hotel Creek, Sydney, Standard, Sudhish Rock, 20/08/2026 to 21/08/2026, 1 day, and AUD $149 including GST. This conflicts with the confirmation page's Deluxe room type and blank last name. |

## Defects / Observations

1. **Confirmation room type mismatch:** Booking form and itinerary show `Standard`, but the confirmation page shows `Deluxe`.
2. **Confirmation last-name loss:** Booking form and itinerary show `Rock`, but the confirmation page last-name field is blank.
3. **Mixed-content console warning:** HTTPS pages attempted to load the carousel iframe from `http://www.adactinhotelapp.com/img-horizontal-carousel/index.html`; the browser blocked it.
4. **Build note:** The application explicitly states that Build 1 contains known defects. The observed inconsistencies should be retested against Build 2.

