const express = require('express')
const passport = require('passport')

router = express.Router

router.get('*', async function(req, res, next){
    res.send("hello world")
})

module.exports = router