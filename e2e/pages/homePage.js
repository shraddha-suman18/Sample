var Page = require('astrolabe').Page;
var url = 'http://www.angularjs.org';
var name_ng_locator = 'yourName';

module.exports = Page.create({

    get: {
        value: function() {
            browser.get(url);
        }
    },

    enterName: {
        value: function(name) {
            var nameInput = element(by.model(name_ng_locator));
            nameInput.sendKeys(name);
        }
    },

    greeting: {
        get: function(){
         return element(by.binding(name_ng_locator));
        }
    }
});
