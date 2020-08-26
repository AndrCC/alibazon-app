const asyncWrapper = require('../util/asyncWrapper');
const getDirname = require('../util/getDirname');
const { validationResult, Result } = require('express-validator');
const path = require('path');
const { signUp, signIn } = require('../services/authApi');

exports.getSignUp = (req, res, next) => {
    res.render(path.join(getDirname(), 'views', 'auth', 'signup'));
}

exports.postSignUp = asyncWrapper(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }

    const accountInfo = await signUp(req.body);
    res.cookie('accountInfo', accountInfo);
    res.redirect('/');

});


exports.getSignIn = (req, res, next) => {
    res.render(path.join(getDirname(), 'views', 'auth', 'signin'));
}

exports.postSignIn = asyncWrapper(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }

    const accountInfo = await signIn(req.body);
    res.cookie('accountInfo', accountInfo);
    res.redirect('/');

});

exports.getUser = (req, res) => {
    let userInfo = {};
    if (req.cookies.accountInfo) {
        let { user } = req.cookies.accountInfo;
        userInfo = user;
        // const tempDate = new Date(user.createdAt);
        // userInfo.createdAt = tempDate.toDateString()
    }
    res.render(path.join(getDirname(), 'views', 'auth', 'user'), { userInfo });
}