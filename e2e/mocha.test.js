var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

var angularHomepage = require('./pages/homePage');

chai.use(chaiAsPromised);
var expect = chai.expect;



describe('E2E Test', function() {

    beforeEach(function(){
        angularHomepage.get();
    });

    it('Should greet the named user', function() {
       angularHomepage.enterName('Julie');
       expect(angularHomepage.greeting.getText()).to.eventually.equal('Hello Julie!');
    });

});
