const express = require('express');
const router = express.Router();
const signUp = require('./signup.router');
const signIn = require('./signin');


router.use(signUp);
router.use(signIn);



module.exports = router;