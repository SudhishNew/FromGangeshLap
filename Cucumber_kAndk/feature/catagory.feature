@catagory
Feature: Catagory page

@cat
Scenario: To verify the catagory form

Given User Should completed the login then navigate into the catagory page

 When User clicks the catagory btn
 When User Enters the name, email and password
 And User checks the iceCream checkBox
 And User selects the gender
 And User selects the empStatus and Submit the form
