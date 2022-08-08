export class LoginPage {
    usernameTextbox = '#txtUsername';
    passwordTextbox = '#txtPassword';
    loginButton = '#btnLogin';

    enterUsername(username) {
        cy.get(this.usernameTextbox).type(username)
    }

    enterPassword(password) {
        cy.get(this.passwordTextbox).type(password)
    }

    clickLogin() {
        cy.get(this.loginButton).click()
    }
}