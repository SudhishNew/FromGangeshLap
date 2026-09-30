Feature: Login functionality of RahulShetty

Scenario: To verify the login functionality with valid credentials
 
 Given User navigate into the Rahul shetty login page

 When User enters the userName and password
 And User clicks the admin radio btn
 And User selects the dropdown
 And User checks the checkbox
 And User hits the signin btn
 Then User Should seen the product page
