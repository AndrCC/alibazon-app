const { expect } = require('chai');
const isAuthenthicated = require('../util/isAuthenthicated');

describe('IsAuthenthicated', function () {
  it('should set res.locals.isAuthenthicated to true', () => {
    const req = {
      cookies: {
        accountInfo: 'info'
      }
    };
    const res = {
      locals: {}
    };
    isAuthenthicated(req, res, () => { });
    expect(res.locals.isAuthenthicated).to.be.true;
  });
  it('should set res.locals.isAuthenthicated to false', () => {
    const req = {
      cookies: {
        accountInfo: ''
      }
    };
    const res = {
      locals: {}
    };
    isAuthenthicated(req, res, () => { });
    expect(res.locals.isAuthenthicated).to.be.false;
  });
})