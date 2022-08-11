const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeHeader () {
        return $("//*[contains(@data-qa, 'heading')]");
    }

    openCreate () {
        return super.open('create');
    }
}

module.exports = new HomePage();