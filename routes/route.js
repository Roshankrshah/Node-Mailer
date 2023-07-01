const express = require('express');
const router = express.Router();
const signup = require('../controllers/appController');
const { sign } = require('crypto');

router.get('/',signup);

module.exports = router;