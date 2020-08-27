const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();

chai.use(chaiHttp);

// Test suite
describe('homepage', () => {
    // Test spec (unit test)
    it('Should show the homepage', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});



