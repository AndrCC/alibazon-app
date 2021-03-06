const { expect } = require('chai');
const { getProduct, getProducts } = require('../controllers/products');

describe('Products Controller', function () {
  describe('Get Product Service', function () {
    it('should throw an error if id is invalid', function (done) {
      const req = {
        params: {
          id: 1,
          categoryId: 'mens'
        }

      };
      getProduct(req, {}, () => { }).then(result => {
        expect(result).to.be.an('error');
        done();
      })
    })

    it('should throw an error if categoryId is invalid', function (done) {
      const req = {
        params: {
          id: 1,
          categoryId: 'invalidtext'
        }

      };
      getProduct(req, {}, () => { }).then(result => {
        expect(result).to.be.an('error');
        done();
      })
    })
  })

  describe('Get Products Service', function () {
    it('should throw an error if categoryId is invalid', function (done) {
      const req = {
        params: {
          categoryId: 'invalidtext'
        }

      };
      getProducts(req, {}, () => { }).then(result => {
        expect(result).to.be.an('error');
        done();
      })
    })
  })

})