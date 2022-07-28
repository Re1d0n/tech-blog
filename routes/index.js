const express = require('express')
const userController = require("../controllers/user")

const router = express.Router()

router.get('/', function (req, res) {
    res.render('home')
})

router.get('/signup', function (req, res) {
    res.render('signup')
})

router.post("/signup", async function (req, res) {
    const { username, email, password } = req.body
    const newUser = await userController.addUser(username, email, password)
    req.session.user_id = newUser.id
    res.redirect('/dashboard')
})

router.get('/login', function (req, res) {
    res.render('login')
})

router.post("/login", async function (req, res) {
    const { email, password } = req.body
    const user = await userController.findUser(email, password)
    if (!user){
        res.redirect('/login')
        return
    }
    req.session.user_id = user.id
    res.redirect('/dashboard')
})

module.exports = router
