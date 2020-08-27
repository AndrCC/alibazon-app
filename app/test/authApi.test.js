const { expect } = require('chai');
const {
  signUp,
  signIn,
  getCartFromAPI
} = require('../services/authApi');

describe('Auth Api', function () {

  describe('Sign in Function', function () {
    const data = {
      email: 'test1@gmail.com',
      password: 'test1'
    };
    const invalid = {
      email: 'test1@gmail.com',
    };
    it('should return return an object if data is valid', done => {
      signIn(data).then(res => {
        expect(res).to.be.an('object');
        done();
      });
    });
    it('should return return an error if data is invalid', done => {
      signIn(invalid).catch(err => {
        expect(err).to.be.instanceOf(Error);
        done();
      });
    });
  });

  // describe('Sign Up Function', function () {
  //   const invalid = {
  //     email: 'test1@gmail.com',
  //   };

  //   it('should return return an error if data is invalid', done => {
  //     signUp(invalid).catch(err => {
  //       expect(err).to.be.instanceOf(Error);
  //       done();
  //     });
  //   });
  // });

  describe('GET Cart Function', function () {
    const invalidToken = 'asdasdasdadasd';
    it('should return an Error if token is invalid', done => {
      getCartFromAPI(invalidToken).catch(err => {
        expect(err).to.be.an.instanceOf(Error);
        done();
      })
    });
  });


});
