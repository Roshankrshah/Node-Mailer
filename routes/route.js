const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello Peter");
});

module.exports = router;