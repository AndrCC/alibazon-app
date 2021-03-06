const { expect } = require('chai');
const {
  getAllCategories,
  getRootCategories,
  getSingleCategory,
  getAllProducts,
  getSingleProduct,
  getProductsFromSubcategory,
} = require('../services/api');

describe('Categories API', function () {

  describe('Get All Categories Function', function () {
    it('should return an array', done => {
      getAllCategories().then(res => {
        expect(res).to.be.an('array');
        done();
      })
    })
  });

  describe('Get Child Categories Function', function () {
    it('should return an empty array if the parameter is type number', done => {
      const parent = 2;
      getRootCategories(parent).then(res => {
        expect(res.length).to.equal(0);
        done();
      })
    });
  });

  describe('Get Single Category Function', function () {
    it('should be an object if the category is valid', done => {
      const category = 'mens';
      getSingleCategory(category).then(res => {
        expect(res).to.be.an('object');
        done();
      }).catch(err => {
        expect(err).to.be.an.instanceOf(Error);
        done();
      })
    })
  });

  describe('Get Single Product Function', function () {
    it('should be an array if the category is valid', done => {
      const id = 86736845;
      getSingleProduct(id).then(res => {
        expect(res).to.be.an('array');
        done();
      })
    })
  });

  describe('Get Products of Subcategories Function', function () {
    it('should return an  array if the parameter is valid', done => {
      const parent = 'womens-clothing-tops';
      getProductsFromSubcategory(parent).then(res => {
        expect(res).to.be.an('array');
        done();
      })
    });
  });

})