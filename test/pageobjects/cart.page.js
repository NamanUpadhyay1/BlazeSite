const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _addToCart = '[class="btn btn-success btn-lg"]'
const _shoppingCart = '#cartur'
const _placeOrderBtn = '[class="btn btn-success"]'


class CartPage
{
    static async addToCart()
    {
        await utils.clickOnElement(_addToCart)
    }

    static async shoppingCart()
    {
        await utils.clickOnElement(_shoppingCart)
    }

    static async placeOrder()
    {
        await utils.clickOnElement(_placeOrderBtn)
    }

}
module.exports = CartPage