import {LoginPage} from './pages/login.cy'
const loginPage = new LoginPage()

describe('All login tests', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }) 


    it ('login with valid credentials', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        cy.get('#welcome').click();
        // cy.get('#txtUsername').type('Admin')
        // cy.get('#txtPassword').type('admin123')
        // cy.get('#btnLogin').click()
    })
    
    it ('login with invalid username', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginPage.enterUsername('Admin123');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        cy.get('#welcome').click();
    })
})
