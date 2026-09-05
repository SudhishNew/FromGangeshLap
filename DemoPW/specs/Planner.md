# Automation Exercise Test Planner
# 1. Overview
This test plan covers the core user journeys of the Automation Exercise website, including homepage access, account registration, login, product browsing, cart operations, checkout, and contact support.

# 2. Objective
Validate that the application works correctly for essential e-commerce and account-management flows in a fresh browser session.

# 3. Scope
In Scope
Home page loading and navigation
User registration and login
Product listing and detail views
Cart add/remove/update actions
Checkout flow
Contact Us form
Logout and session handling
Out of Scope
Real payment gateway processing
Email delivery verification
Performance and load testing
# 4. Assumptions
The application is available at the public URL.
Tests start from a blank or fresh state.
A test email and password can be generated for registration.
Demo/test values can be used for checkout scenarios.
# 5. Test Cases
## TC-01: Homepage Loads Successfully
Objective: Verify the home page opens correctly.
Steps:
Open the home page.
Wait for the page to fully load.
Verify the header, hero section, and navigation links are visible.
Expected Result:
The page loads without errors.
Main content and navigation are visible.
## TC-02: User Registration
Objective: Verify that a new user can register an account.
Steps:
Open the Signup page.
Enter a valid name and email.
Submit the registration form.
Complete the account details form.
Submit the final registration request.
Expected Result:
The account is created successfully.
The user is redirected to an account state or confirmation screen.
## TC-03: Login with Valid and Invalid Credentials
Objective: Validate login behavior.
Steps:
Open the Login page.
Enter valid credentials and submit.
Attempt login with invalid credentials.
Attempt login with empty fields.
Expected Result:
Valid credentials log the user in.
Invalid credentials show clear error messages.
Empty fields trigger validation feedback.
## TC-04: Product Browsing
Objective: Verify users can browse products.
Steps:
Open the Products page.
Review the listed products.
Use search or category navigation if available.
Expected Result:
Products are displayed correctly.
Search or filters return relevant results.
## TC-05: Product Detail View
Objective: Confirm product details are displayed properly.
Steps:
Open a product from the product list.
Verify the product image, name, price, and description.
Expected Result:
Product information is shown clearly and correctly.
## TC-06: Add to Cart and Update Quantity
Objective: Verify cart operations.
Steps:
Select a product.
Add it to the cart.
Increase or decrease quantity.
Remove the product from the cart.
Expected Result:
The cart updates correctly.
Quantity changes are reflected accurately.
Removal updates the cart state properly.
## TC-07: Checkout Flow
Objective: Validate the checkout process.
Steps:
Add a product to the cart.
Open the cart.
Proceed to checkout.
Enter shipping details.
Complete the payment step.
Expected Result:
Checkout proceeds without blocking errors.
The user reaches order confirmation after successful submission.
## TC-08: Contact Us Form
Objective: Verify the support contact form.
Steps:
Open the Contact Us page.
Enter name, email, subject, and message.
Submit the form.
Expected Result:
Valid input is accepted.
A confirmation message is shown.
## TC-09: Logout and Session Handling
Objective: Ensure session termination works correctly.
Steps:
Log in to an account.
Click Logout.
Try to access a protected page.
Expected Result:
The user is logged out.
Protected pages require login again.
## TC-10: Negative and Validation Scenarios
Objective: Confirm invalid input is handled properly.
Steps:
Register using an existing email.
Submit empty login or checkout forms.
Attempt checkout with an empty cart.
Expected Result:
Clear validation messages or informational errors appear.
The application does not crash or behave unpredictably.
# 6. Exit Criteria
The feature is considered ready when:

All critical flows pass.
No critical defects remain open.
Validation and error messages are clear.
Registration, login, cart, and checkout are stable.