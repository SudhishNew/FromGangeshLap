
@DataDriven
Feature: Rahushetty login page

Scenario Outline: To verify the login functionality with multiple set of credentials

Given User navigate into the login page with the "<URL>"

When User enters the "<UserName>"  and "<Password>"


    Examples:
       |URL                                              |UserName           |Password         |
       |https://rahulshettyacademy.com/loginpagePractise/|rahulshettyacademy |Learning@830$3mK2|
       |https://rahulshettyacademy.com/loginpagePractise/|user1              |pswd1            |
       |https://rahulshettyacademy.com/loginpagePractise/|user 2             |pswd2            |


