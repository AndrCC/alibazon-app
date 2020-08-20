const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();
const { expect } = require('chai');

const {
    getAllCategories,
    getChildCategories,
    getSingleCategory,
    getAllProducts,
    getSingleProduct,
    getProductsFromSubcategory,
} = require('../services/api');

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

describe('Services API', function () {
    describe('Get All Categories Function', function () {
        it('should return an array', done => {
            getAllCategories().then(res => {
                expect(res).to.be.an('array');
                done();
            })
        })
    });
});
