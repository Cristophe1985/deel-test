const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const CreatePage = require('../pageobjects/create.page');

describe('Deel Homepage ', () => {
    it('Create a contract as Fixed Rate', async () => {
        await LoginPage.open();
        await LoginPage.login('ccmwork2@gmail.com', 'Asdf12345#');

        await expect(HomePage.welcomeHeader).toBeExisting();
        await expect(HomePage.welcomeHeader).toHaveTextContaining('Good');
        await HomePage.openCreate();

        // type, name, taxResidence, taxResidenceProvince, jobTitle, seniorityLevel, scopeWork, currency, paymentRate, paymentFrequency, milestoneName, milestoneDescription, milestoneAmount, specialClause
        await CreatePage.createContract("Pay As You Go", "Test Pay As You Go 01", "United States", "Colorado", "QA Engineer", "Senior (Individual Contributor Level 3)", "Payroll Providing Systems", "GBP", "1000", "Weekly", "", "", "", "For this Pay As You Go contract, all taxes, government fees and stamp duties incurred from transactions shall be borne by the company");
        await browser.pause(2500);
    });
});