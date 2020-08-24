const asyncWrapper = require('../util/asyncWrapper');
const getDirname = require('../util/getDirname');
const { validationResult, Result } = require('express-validator');
const path = require('path');
const { signUp } = require('../services/authApi');

exports.getSignUp = (req, res, next) => {
    res.render(path.join(getDirname(), 'views', 'auth', 'signup'));
}

exports.postSignUp = asyncWrapper(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }

    const acccountData = await signUp(req.body);
    res.cookie('acccountData', acccountData);
    res.redirect('/', { acccountData });

});


exports.getSignIn = (req, res, next) => {
    res.render(path.join(getDirname(), 'views', 'auth', 'signin'));
}