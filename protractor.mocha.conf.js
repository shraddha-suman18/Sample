exports.config = {
    // The address of a running selenium server. If this is specified,
    // seleniumServerJar and seleniumPort will be ignored.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    specs: [
        './e2e/mocha.test.js'
    ],

    framework: 'mocha',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'firefox'
    },

    // Options to be passed to mocha
    mochaOpts: {
        reporter: 'spec',
        slow: 3000,
        ui: 'bdd'
    }
};

