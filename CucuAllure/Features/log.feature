Feature: Login

  Scenario Outline: To verify the Login page with multiple sets of credentials
    Given User navigates to the login page
    When User enters the "<UserName>" and "<Password>"
    Then User should see login page

    Examples:
      | UserName           | Password           |
      | rahulshettyacademy | Learning@830$3mK2 |
      | admin1             | user1              |
      | admin2             | user2              |
