Feature: Login

  I want to Login as Admin

  Scenario: Login as Admin
    Given I navigate to the website
    When I enter credentials and click on Login Button
    Then verify user navigates to Dashboard page