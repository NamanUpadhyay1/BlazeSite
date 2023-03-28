const { config } = require('./wdio.conf');
const dataInp = require('./testConfig.json')

if (dataInp.browser == "chrome") {
    if (dataInp.browserStack) {
        config.capabilities = [
            {
                maxInstances: 5,
                //
                browserName: dataInp.browserStackChrome,//chrome//firefox//MicrosoftEdge

                acceptInsecureCerts: true,
                "os": "OS X",
                "osVersion": "Sierra",
                "browserVersion": "103.0",
                "local": "false",
            }

        ]
        config.services =
            [

                ['browserstack']

            ]
    }
    else
    {
            {
                config.capabilities =
                    [
                        {
                            maxInstances: 5,
                            
                            browserName: 'chrome',//chrome//firefox//MicrosoftEdge

                            acceptInsecureCerts: true,

                            'goog:chromeOptions':
                            {
                                
                                args: [`${dataInp.executionmode}`, '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080']
                                
                            }
                        },
                    ]
                config.services =
                    [

                        ['chromedriver'],

                    ]
            }
        
}
}

if (dataInp.browser == "safari") {
    if (dataInp.browserStack) {
        config.capabilities = [
            {
                maxInstances: 5,
                //
                browserName: 'Safari',//chrome//firefox//MicrosoftEdge

                acceptInsecureCerts: true,
                "os": "OS X",
                "osVersion": "Sierra",
                "browserVersion": "10.1",
                "local": "false",
            }

        ]
        config.services =
            [

                ['browserstack']

            ]
    }
    else
    {
            {
                config.capabilities =
                    [
                        {
                            maxInstances: 5,
                            
                            browserName: 'safari',//chrome//firefox//MicrosoftEdge

                            acceptInsecureCerts: true,

                        },
                    ]
                config.services =
                    [

                        ['selenium-standalone'],

                    ]
            }
        
}
}


exports.config = config;