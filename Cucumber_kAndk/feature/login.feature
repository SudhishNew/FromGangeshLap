@login
Feature: RahulShetty Login page
 
 Scenario: To Verify the login page with the valid credentials

  Given User should navigate into the login page

    When User enters the UserName
    When User enters the Password
    When User selects the radio button
    And User selects the DD
    And User checks the Checkbox
    And User clicks the signin button
    Then User Should navigates the Catagory page
