const express = require('express');
const router = express.Router();
const {signup, getbill} = require('../controllers/appController');

router.post('/user/signup',signup);
router.post('/product/getbill',getbill);

module.exports = router;