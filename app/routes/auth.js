const express = require('express');
const router = express.Router();
const { getSignUp, getSignIn } = require('../controllers/auth');

router.get('/signup', getSignUp);
router.get('/signin', getSignIn);

module.exports = router;
