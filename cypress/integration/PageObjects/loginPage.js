class LoginPage {
  userNameField() {
    return cy.get('[name="username"]')
  }

  passwordField() {
    return cy.get('[name="password"]')
  }

  buttonLogin () {
    return cy.get('.oxd-button')
  }

  typeIntoUserNameField(text) {
    this.userNameField().type(text)
  }

  typeIntoPasswordField(text) {
    this.passwordField().type(text)
  }

  clickLoginButton () {
    this.buttonLogin().click()
  }

  loginAsUser (username, password) {
    this.typeIntoUserNameField(username)
    this.typeIntoPasswordField(password)
    this.clickLoginButton()
  }
}

export default new LoginPage()