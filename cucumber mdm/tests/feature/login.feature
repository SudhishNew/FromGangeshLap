Feature login functionality of a facebook application

Back Ground 
Given user should be in login page

Scenario  : To validate the login functionality with valid usernam and password


When User enters the valid username "mukesh@123" and valid password "Mukesh@1456" 
And user clicked and login button
Then user should navigate to the home page  


Scenario outline  : To validate the login functionality with Invalid usernam and password


When User enters the valid username "username" and valid password "password " 
And user clicked and login button
Then user should navigate to the home page  

Examples:

|username||password|
|mukgdwsfgehj||ksjwhqte3irj|
|,mdbkdne||sdbhgfjsh|
|dhsvfbjsdg||hdsfsdjh|
|dnfbdf||whrykejwfyu|