const Page = require('./page');

class CreatePage extends Page {
    get contractTypeFixedRate() {
        return $("//h4[normalize-space()='Fixed Rate']");
    }

    get contractTypePayAsYouGo() {
        return $("//h4[normalize-space()='Pay As You Go']");
    }

    get contractTypeMilestone() {
        return $("//h4[normalize-space()='Milestone']");
    }

    get creatingContractFormHeader() {
        return $("//h2[@class='mb-10']");
    }

    // Contract name
    get contractName() {
        return $("//input[@name='name']");
    }

    // Contractor tax residence
    get contractorTaxResidence () {
        return $("//input[@id='react-select-2-input']");
    }

    // Contractor tax residence, choose a province
    get contractorTaxResidenceProvince () {
        return $("//input[@id='react-select-4-input']");
    }

    // Job title
    get contractJobTitle () {
        return $("//input[@name='jobTitle']");
    }

    // Seniority level
    get contractSeniorityLevel () {
        return $("//input[@id='react-select-3-input']");
    }

    // Scope of work
    get contractScopeWork () {
        return $("//textarea[@name='scope']");
    }

    // Contractor start date
    get contractorStartDate () {
        return $("//input[@name='effectiveDate']");
    }

    // Currency
    get contractCurrency () {
        return $("//input[@id='react-select-5-input']");
    }

    // Payment rate
    get contractPaymentRate () {
        return $("//input[@name='rate']");
    }

    // Payment frequency
    get contractPaymentFrequency () {
        return $("//input[@id='react-select-6-input']");
    }

    get btnNextSubmitDiv () {
        return $("//div[normalize-space()='next']//parent::button");
    }

    get btnNextSubmitSpan () {
        return $("//span[normalize-space()='Next']/parent::button");
    }
    
    get addSpecialClause () {
        return $("//button[@data-qa='add-a-special-clause']");
    }

    get addSpecialClauseTextArea () {
        return $("//textarea[contains(@class,'textarea pt-4 pr-7 pl-7 resizable pb-4')]");
    }

    get createContractSubmit () {
        return $("//div[normalize-space()='create contract']//parent::button");
    }

    get contractNameHeader () {
        return $("//h1[@class='deel-ui__typography__heading_1']");
    }
    
    async createContract (type, name, taxResidence, taxResidenceProvince, jobTitle, seniorityLevel, scopeWork, currency, paymentRate, paymentFrequency, specialClause) {
        var formTitle = "";

        switch (type) {
            case "Fixed rate":
                this.contractTypeFixedRate.click();
                formTitle = "fixed";
            break;

            case "Pay As You Go":
                this.contractTypePayAsYouGo.click();
                formTitle = "pay as you go";
            break;

            case "Milestone":
                this.contractTypeMilestone.click();
                formTitle = "milestone";
            break;

            default:
                console.log('Error: contract type is undefined');
            break;
        }

        await expect(this.creatingContractFormHeader).toBeExisting();
        await expect(this.creatingContractFormHeader).toHaveTextContaining(formTitle);
        await browser.pause(1000);

        console.log('*** Page 1 ***');

        await browser.pause(500);
        await this.contractName.setValue(name);

        await browser.pause(500);
        await this.contractorTaxResidence.setValue(taxResidence);
        browser.keys("\uE007"); 

        await browser.pause(500);
        await this.contractorTaxResidenceProvince.setValue(taxResidenceProvince);
        browser.keys("\uE007"); 
        
        await browser.pause(500);
        await this.contractJobTitle.setValue(jobTitle);
        
        await browser.pause(500);
        await this.contractSeniorityLevel.setValue(seniorityLevel);
        browser.keys("\uE007"); 

        await browser.pause(500);
        await this.contractScopeWork.setValue(scopeWork);
                    
        // await browser.pause(500);
        // await this.contractorStartDate.setValue("8/9/2022");
        // browser.keys("\uE007"); 

        await browser.pause(2500);
        await this.btnNextSubmitDiv.click();

        console.log('*** Page 2 ***');
        
        await browser.pause(500);
        await this.contractCurrency.setValue(currency);
        browser.keys("\uE007"); 

        await browser.pause(500);
        await this.contractPaymentRate.setValue(paymentRate);
        
        await browser.pause(500);
        await this.contractPaymentFrequency.setValue(paymentFrequency);
        browser.keys("\uE007"); 

        await browser.pause(2500);
        await this.btnNextSubmitDiv.click();

        console.log('*** Page 3 ***');

        await browser.pause(2500);
        await this.btnNextSubmitSpan.click();

        console.log('*** Page 4 ***');

        await browser.pause(500);
        await this.addSpecialClause.click();

        await browser.pause(500);
        await this.addSpecialClauseTextArea.setValue(specialClause);
        
        await browser.pause(2500);
        await this.btnNextSubmitDiv.click();

        console.log('*** Page 5 ***');

        await browser.pause(2500);
        await this.createContractSubmit.click();

        console.log('*** Validate Contract has been Created! ***');

        await browser.pause(1000);
        await expect(this.contractNameHeader).toBeExisting();
        await expect(this.contractNameHeader).toHaveTextContaining(name);
    }
}

module.exports = new CreatePage();