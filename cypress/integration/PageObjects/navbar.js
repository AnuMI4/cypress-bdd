class NavBar {
  adminMenu () {
    return cy.get('#menu_pim_viewPimModule')
  }

  userManagementMenu () {
    return cy.get('#menu_admin_UserManagement')
  }

  optionUsers () {
    return cy.get('#menu_admin_viewSystemUsers')
  }

  hoverAdminMenu () {
    this.adminMenu().trigger('mouseover')
  }

  clickAdminMenu () {
    this.adminMenu().click()
  }

  hoverUserManagementMenu () {
    this.userManagementMenu().invoke('show').trigger('mouseover')
  }

  clickOptionUsers () {
    this.optionUsers().click()
  }
}

export default new NavBar()