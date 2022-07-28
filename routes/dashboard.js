const express = require('express')
const userController = require("../controllers/user")

const router = express.Router()

router.use(function(req, res, next) {
    
})

router.get('/dashboard', function (req, res) {
    console.log(req.session.user_id)
    if (!req.session.user_id) {
        res.redirect("/signup")
        return
    }
    res.render('dashboard')
})

module.exports = router;