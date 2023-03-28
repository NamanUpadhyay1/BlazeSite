const utils = require("../specs/utils")
const homePage = require('../pageobjects/home.page')
const cartPage = require('../pageobjects/cart.page')
const billingPage = require('../pageobjects/billing.page')

const dataInp = require('../../testConfig.json')
const { assert, Assertion, expect } = require("chai")

const { hostname } = require("os")

let date = new Date().getTime()
const recentName = `naman${date}`



describe("Verify user should be able to register an account",async ()=>
{
    it("Navigate to register button and fill in details", async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        await utils.pauseTime(2000)
        await homePage.registerButton()
        await utils.pauseTime(2000)
        await homePage.userNameType(recentName)
        await homePage.passwordType()
        await homePage.regSubmitButton()
        await utils.pauseTime(4000)
        await utils.acceptAlert()
        await utils.pauseTime(2000)
    })
})

describe("Verify user should be able to log into account",async ()=>
{
    it("Navigate to the log in button and fill in details", async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        await utils.pauseTime(2000)
        await homePage.loginButton()
        await utils.pauseTime(2000)
        await homePage.logUsername()
        await homePage.logPassword()
        await homePage.loginSubmitButton()
        await utils.pauseTime(3000)
    })
})


describe("Verify user is able to purchase a mobile phone successfully", async()=>
{
    it("Navigate to correct URL", async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        await utils.pauseTime(2000)
    })

    it('Purchase Samsung galaxy s6 phone ',async()=>
    {
        await homePage.phonesMenu()
        await homePage.samsungPhone()
        await cartPage.addToCart()
        await utils.pauseTime(2000)
        await utils.acceptAlert()
        await cartPage.shoppingCart()
        await utils.pauseTime(2000)
        await cartPage.placeOrder()
        await utils.pauseTime(2000)
        await billingPage.billingForm()
        await utils.pauseTime(2000)
    })

    it('Success Message assertion', async()=>
    {   
        const currentMsg = await $('//h2[contains(text(), "Thank you for your purchase!")]').getText()
        
        console.log('zzzzzzz '+ currentMsg + ' asdijawduhasd')
        const expectedMsg = 'Thank you for your purchase!'
        assert(currentMsg==expectedMsg)
    })  
})

describe("Verify user is able to purchase a Laptop successfully", async()=>
{
    it("Navigate to correct URL", async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        await utils.pauseTime(2000)
    })

    it('Purchasing Sony vaio i5 laptop ', async()=>
    {
        await homePage.laptopsMenu()
        await homePage.sonyLaptop()
        await cartPage.addToCart()
        await utils.pauseTime(2000)
        await utils.acceptAlert()
        await cartPage.shoppingCart()
        await utils.pauseTime(2000)
        await cartPage.placeOrder()
        await utils.pauseTime(2000)
        await billingPage.billingForm()
        await utils.pauseTime(2000)
    })
    it('Success Message assertion', async()=>
    {   
        const currentMsg = await $('//h2[contains(text(), "Thank you for your purchase!")]').getText()
        
        console.log('zzzzzzz '+ currentMsg + ' asdijawduhasd')
        const expectedMsg = 'Thank you for your purchase!'
        assert(currentMsg==expectedMsg)
    }) 
})

describe("Verify user is able to purchase a Monitor successfully", async()=>
{
    it("Navigate to correct URL", async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        await utils.pauseTime(2000)
    })

    it('Purchasing Apple monitor 24 ', async()=>
    {
        await homePage.monitorsMenu()
        await homePage.appleMonitor()
        await utils.pauseTime(2000)
        await cartPage.shoppingCart()
        await utils.pauseTime(2000)
        await cartPage.placeOrder()
        await utils.pauseTime(2000)
        await billingPage.billingForm()
        await utils.pauseTime(2000)
    })

    it('Success Message assertion', async()=>
    {   
        const currentMsg = await $('//h2[contains(text(), "Thank you for your purchase!")]').getText()
        
        console.log('zzzzzzz '+ currentMsg + ' asdijawduhasd')
        const expectedMsg = 'Thank you for your purchase!'
        assert(currentMsg==expectedMsg)
    }) 
})

// describe("Verify user is able to see the information video About us", async()=>
// {
//     it("Navigate to correct URL", async()=>
//     {
//         await utils.openSite(dataInp.baseUrl)
//         await utils.pauseTime(2000)
//     })

//     it("about us button and info", async()=>
//     {
//         await homePage.aboutUsButton()
//         await utils.pauseTime(2000)
//         const video = await $('.vjs-poster')
//         await expect(video).to.be.displayed
//     })
// })
