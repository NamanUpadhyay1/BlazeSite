const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _registerButton = '#signin2'
const _userName = '#sign-username'
const _password = '#sign-password'
const _regSubmitBtn = '//button[contains(text(), "Sign up")]'

const _loginButton = '#login2'
const _loginUsername = '#loginusername'
const _loginPassword = '#loginpassword'
const _loginSubmitBtn = '//button[contains(text(), "Log in")]'
const _logoutButton = '#logout2'

const _phonesMenu = '//a[contains(text(), "Phones")]'
const _laptopsMenu = '//a[contains(text(), "Laptops")]'
const _monitorsMenu = '//a[contains(text(), "Monitors")]'

const _samsungPhone = '//a[contains(text(), "Samsung galaxy s6")]'
const _sonyLaptop = '//a[contains(text(), "Sony vaio i5")]'
const _appleMonitor = '//a[contains(text(), "Apple monitor 24")]'

const _aboutUsButton = '//a[contains(text(), "About us")]'


class HomePage
{
    //__________________________________Registration____________________________________

    static async registerButton()
    {
        await utils.clickOnElement(_registerButton)
    }

    static async userNameType(recentName)
    {
        await utils.typeText(_userName, recentName)
    }

    static async passwordType()
    {
        await utils.typeText(_password, dataInp.password)
    }

    static async regSubmitButton()
    {
        await utils.clickOnElement(_regSubmitBtn)
    }

    //__________________________________LogIn and LogOut____________________________________

    static async loginButton()
    {
        await utils.clickOnElement(_loginButton)
    }

    static async logUsername()
    {
        await utils.typeText(_loginUsername, dataInp.username)
    }

    static async logPassword()
    {
        await utils.typeText(_loginPassword, dataInp.logPassword)
    }

    static async loginSubmitButton()
    {
        await utils.clickOnElement(_loginSubmitBtn)
    }

    static async logOutButton()
    {
        await utils.clickOnElement(_logoutButton)
    }

    //__________________________________Categories____________________________________

    static async phonesMenu()
    {
        await utils.clickOnElement(_phonesMenu)
    }

    static async laptopsMenu()
    {
        await utils.clickOnElement(_laptopsMenu)
    }

    static async monitorsMenu()
    {
        await utils.clickOnElement(_monitorsMenu)
    }

    //__________________________________Phone____________________________________

    static async samsungPhone()
    {
        await utils.clickOnElement(_samsungPhone)
    }

    //__________________________________Laptop____________________________________

    static async sonyLaptop()
    {
        await utils.clickOnElement(_sonyLaptop)
    }

    //__________________________________Monitor____________________________________

    static async appleMonitor()
    {
        await utils.clickOnElement(_appleMonitor)
    }


    //__________________________________aboutUs____________________________________

    static async aboutUsButton()
    {
        await utils.clickOnElement(_aboutUsButton)
    }

    static async videoAboutUs()
    {
        await $('.vjs-poster')
    }
}
module.exports = HomePage