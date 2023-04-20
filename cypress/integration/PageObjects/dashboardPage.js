class DashboardPage {
  pageTitle () {
    return cy.get('.oxd-topbar-header-breadcrumb')
  }
}

export default new DashboardPage()