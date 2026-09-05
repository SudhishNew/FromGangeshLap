@datadriven



Feature: Adactin Login page data driven

    Scenario Outline: To test login page with ivalid data

        Given User navigates to the adactin web page
        When user enters the invalid "<userName>" and "<password>" and clicks the login button

        Examples:
            |userName||password|
            |Trends||trends123|
            |Sudhish||Sudhi1408|


