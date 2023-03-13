const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _nameOrder = '#name'
const _countryOrder = '#country'
const _cityOrder = '#city'
const _creditCardNumber = '#card'
const _cardMonth = '#month'
const _cardYear = '#year'
const _purchaseButton = '//button[contains (text(), "Purchase")]'
const _thankYouMessage = '//h2[contains(text(), "Thank you for your purchase!")]'

class BillingPage
{
    static async phoneBillingName()
    {
        await utils.typeText(_nameOrder, dataInp.nameBilling)
    }

    static async phoneBillingCountry()
    {
        await utils.typeText(_countryOrder, dataInp.countryBilling)
    }

    static async phoneBillingCity()
    {
        await utils.typeText(_cityOrder, dataInp.cityBilling)
    }

    static async phoneBillingCreditCard()
    {
        await utils.typeText(_creditCardNumber, dataInp.creditCardBilling)
    }

    static async phoneBillingMonth()
    {
        await utils.typeText(_cardMonth, dataInp.creditCardMonth)
    }

    static async phoneBillingYear()
    {
        await utils.typeText(_cardYear, dataInp.creadCardYear)
    }

    static async purchaseButton()
    {
        await utils.clickOnElement(_purchaseButton)
    }

    static async billingForm()
    {
        await this.phoneBillingName()
        await this.phoneBillingCountry()
        await this.phoneBillingCity()
        await this.phoneBillingCreditCard()
        await this.phoneBillingMonth()
        await this.phoneBillingYear()
        await this.purchaseButton()
    }

    static async successMessage()
    {
        await $('//h2[contains(text(), "Thank you for your purchase!")]').getText()
    }

    
}
module.exports = BillingPage