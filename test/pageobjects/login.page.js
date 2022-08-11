const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//*[@id="mui-1"]');
    }

    get inputPassword () {
        return $('//*[@id="mui-2"]');
    }

    get btnSubmit () {
        return $('/html/body/div[1]/div[2]/div[2]/div[4]/div/div/form/div[4]/button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await browser.pause(500);
        await this.inputUsername.setValue(username);

        await browser.pause(500);
        await this.inputPassword.setValue(password);

        await browser.pause(500);
        await this.btnSubmit.click();

        console.log('*******************************************************************');
        console.log('****** PLEASE SOLVE RE-CAPTCHA MANUALLY IN ORDER TO CONTINUE ******');
        console.log('*******************************************************************');
        await browser.pause(10000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('#');
    }
}

module.exports = new LoginPage();