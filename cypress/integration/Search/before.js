import loginPage from '../PageObjects/loginPage'
import userDetails from '../../fixtures/user-detail.json'

beforeEach(() => {
  cy.visit('/')
  loginPage.loginAsUser(userDetails.adminUser, userDetails.adminPassword)
})