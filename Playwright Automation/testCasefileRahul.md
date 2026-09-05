# Test Cases for Rahul Shetty Academy Login Page

Application URL: https://rahulshettyacademy.com/loginpagePractise/

## 1. Login Page Loads Successfully
- Title: Verify the login page loads correctly
- Steps:
  1. Open the application URL
  2. Wait for the page to load
- Expected Result: The login page is displayed with username, password, role selection, terms checkbox, and Sign In button.

## 2. Valid User Login
- Title: Verify a valid user can log in successfully
- Steps:
  1. Enter the valid username: rahulshettyacademy
  2. Enter the valid password: Learning@830$3mK2
  3. Select the Admin role
  4. Check the terms and conditions checkbox
  5. Click Sign In
- Expected Result: The user is logged in successfully and the application proceeds to the next page.

## 3. Invalid Username Login
- Title: Verify login fails for an invalid username
- Steps:
  1. Enter an invalid username
  2. Enter a valid password
  3. Select a role
  4. Accept terms
  5. Click Sign In
- Expected Result: Login fails and an appropriate error message is shown.

## 4. Invalid Password Login
- Title: Verify login fails for an invalid password
- Steps:
  1. Enter a valid username
  2. Enter an invalid password
  3. Select a role
  4. Accept terms
  5. Click Sign In
- Expected Result: Login fails and an appropriate error message is shown.

## 5. Empty Username Validation
- Title: Verify login is blocked when username is empty
- Steps:
  1. Leave the username blank
  2. Enter a valid password
  3. Select a role
  4. Accept terms
  5. Click Sign In
- Expected Result: The user is not allowed to proceed and validation feedback is shown.

## 6. Empty Password Validation
- Title: Verify login is blocked when password is empty
- Steps:
  1. Enter a valid username
  2. Leave the password blank
  3. Select a role
  4. Accept terms
  5. Click Sign In
- Expected Result: The user is not allowed to proceed and validation feedback is shown.

## 7. Terms and Conditions Checkbox Validation
- Title: Verify login requires acceptance of terms and conditions
- Steps:
  1. Enter valid credentials
  2. Do not check the terms checkbox
  3. Click Sign In
- Expected Result: The user cannot log in until the terms are accepted.

## 8. Role Selection Verification
- Title: Verify both roles can be selected
- Steps:
  1. Click the Admin radio button
  2. Click the User radio button
- Expected Result: The selected role changes correctly and only one role remains selected at a time.

## 9. User Role Selection with Valid Credentials
- Title: Verify a valid user can log in using the User role
- Steps:
  1. Enter valid credentials
  2. Select the User role
  3. Accept terms
  4. Click Sign In
- Expected Result: The user is logged in successfully with the User role.

## 10. Dropdown Selection Verification
- Title: Verify the role/user type dropdown works
- Steps:
  1. Open the dropdown
  2. Select Teacher or Consultant
- Expected Result: The selected option is displayed correctly.
