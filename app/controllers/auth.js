const asyncWrapper = require('../util/asyncWrapper');
const getDirname = require('../util/getDirname');
const path = require('path');

exports.getSignUp = (req, res, next) => {
    res.render(path.join(getDirname(), 'views', 'auth', 'signup'));
}


exports.getSignIn = (req, res, next) => {
    res.render(path.join(getDirname(), 'views', 'auth', 'signin'));
}