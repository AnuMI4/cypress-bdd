import loginPage from '../PageObjects/loginPage'
import dashboardPage from '../PageObjects/dashboardPage'
import userDetails from '../../fixtures/user-detail.json'

Given('I navigate to the website', () => {
  cy.visit('/')
})

When('I enter credentials and click on Login Button', () => {
  loginPage.typeIntoUserNameField(userDetails.adminUser)
  loginPage.typeIntoPasswordField(userDetails.adminPassword)
  loginPage.clickLoginButton()
})

Then('verify user navigates to Dashboard page', () => {
  dashboardPage.pageTitle().should('have.text', 'Dashboard')
})
