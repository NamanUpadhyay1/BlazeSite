class Utils
{
    // static async setValue(locator, inputText, options = { slow: true }) {
    //     try {
    //       // await this.clearText(locator)
    //       if (options.slow) {
    //         for (let i = 0; i < inputText.length; i++) {
    //           const el = await $(locator);
    //           await el.addValue(inputText[i]);
    //           await this.wait(5);
    //         }
    //       }
    //     } catch (err) {
    //       logger.error(err);
    //       throw new Error(`not able to add value: ${err}`);
    //     }
    //   }
      
    //   static async sendText(locator, inputText, options = { slow: true }) {
    //     try {
    //       await this.clearText(locator);
    //       const el = await $(locator);
    //       await el.setValue(inputText);
    //       // await this.wait(5)
    //     } catch (err) {
    //        logger.error(err);
    //       throw new Error(`not able to send text: ${err}`);
    //     }
      // }
      static async typeText(locator, value)
      {
        const el = $(locator)
        await el.setValue(value)
      }

      static async clickOnElement(locator)
      {
        const el = $(locator)
        await el.click()
      }

      static async getData(locator)
      {
        const el = $(locator)
        return el.getText()
      }

      static async waitForElement(locator, timeOut)
      {
        const el = await $(locator)
        await el.waitForDisplayed(timeOut)
      }

      static async takeScreenshot() 
      {
        try {
          await cucumberJson.attach(browser.takeScreenshot(), "image/png");
        } catch (err) {
          logger.error("Error " + err);
        }
      }
      static async pauseTime(time)
    {
        await browser.pause(time)
    }

    static async getCurrentUrl()
    {
        await browser.getUrl()
    }

    static async switchWindow(url)
    {
        await browser.switchWindow(url)
    }

    static async closingWindow()
    {
        await browser.closeWindow()
    }

    static async acceptAlert()
    {
      await browser.acceptAlert()
    }

    }

module.exports = Utils