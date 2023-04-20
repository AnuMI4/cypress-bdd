class SearchPage {
  userNameField () {
    return cy.get('#searchSystemUser_userName')
  }

  typeOnUserNameField (text) {
    this.userNameField().type(text)
  }

  searchButton () {
    return cy.get('#searchBtn')
  }

  clickSearchButton () {
    this.searchButton().click()
  }

  enterIdValue (value) {
    cy.get('#empsearch_id').type(value)
  }

  enterEmployeeName (text) {
    cy.get('#empsearch_employee_name_empName').click().type(`{selectall}{backspace}`).wait(1000).type(text)
  }

  selectStatus (value) {
    cy.get('#empsearch_employee_status').select(value)
  }

  getTableValue () {
    return cy.get('#resultTable').find('tbody').find('.left').eq(1)
  }
}

export default new SearchPage()