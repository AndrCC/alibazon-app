const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getSignUp, postSignUp, getSignIn, postSignIn, getUser } = require('../controllers/auth');

router.get('/signup', getSignUp);
router.post('/signup', [
    check('name').trim().isLength({ min: 6 }),
    check('email').trim().isEmail(),
    check('password').trim().isLength({ min: 6 })
], postSignUp);

router.get('/signin', getSignIn);
router.post('/signin', [
    check('email').trim().isEmail(),
    check('password').trim().isLength({ min: 6 })
], postSignIn);

router.get('/user', getUser);

module.exports = router;
