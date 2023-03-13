const { config } = require('./wdio.conf');
const dataInp = require('./testConfig.json')

if (dataInp.browser == "chrome") {
    if (dataInp.browserStack) {
        config.capabilities = [
            {
                maxInstances: 5,
                //
                browserName: 'chrome',//chrome//firefox//MicrosoftEdge

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


// else if (dataInp.browser == 'Edge') {
//     if (dataInp.browserStack) {
//         config.capabilities =
//             [
//                 {
//                     maxInstances: 5,
                    
//                     browserName: 'Edge',//chrome//firefox//Edge

//                     acceptInsecureCerts: true,

//                     "os": "OS X",
//                     "osVersion": "Sierra",
//                     "browserVersion": '103.0',
//                     "local": "false",
//                 }

//             ]
//         config.services =
//             [

//                 ['browserstack']

//             ]
//     }
//     else {
        
//             config.capabilities =
//                 [
//                     {
//                         maxInstances: 5,
                        
//                         browserName: 'Edge',//chrome//firefox//Edge

//                         'ms:edgeOptions':
//                         {

//                             args: [`${dataInp.executionmode}`, '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080']
//                         }
//                     },
//                 ]
//             config.services =
//                 [
//                     ['edgedriver']
//                 ]
//         }
// }



exports.config = config;