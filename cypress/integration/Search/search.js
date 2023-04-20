import navbar from '../PageObjects/navbar'
import searchPage from '../PageObjects/searchPage'

Given('I navigate to User Management page', () => {
  navbar.clickAdminMenu()
})

When('I enter username value on username field', () => {
  searchPage.enterEmployeeName('Sara')
})

And('I click on Search button', () => {
  searchPage.clickSearchButton()
})

Then('appropriate search results appear', () => {
  searchPage.getTableValue().should('contain', 'Sara')
})

When('I enter', (datatable) => {
  datatable.hashes().forEach(element => {
    searchPage.enterEmployeeName(element.username)
    searchPage.enterIdValue(element.userid)
    searchPage.selectStatus(element.status)
  })
  searchPage.clickSearchButton()
})