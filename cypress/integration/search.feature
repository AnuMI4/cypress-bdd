Feature: Search

Scenario: I want to search for a user by providing username only
  Given I navigate to User Management page
  When I enter username value on username field
  And I click on Search button
  Then appropriate search results appear

Scenario: I want to search for a user by providing all fields
  Given I navigate to User Management page
  When I enter
    |username|userid |status                |
    |Sara    |0103   |Full-Time Permanent   |
  And I click on Search button
  Then appropriate search results appear
  