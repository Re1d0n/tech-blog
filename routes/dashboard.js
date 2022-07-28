const express = require('express')
const postController = require("../controllers/post")

const router = express.Router()

router.use(function(req, res, next) {
    if (!req.session.user_id) {
        res.redirect("/signup")
        return
    }
    next()
})

router.get('/', function (req, res) {
    res.render('dashboard')
})

router.get("/createpost", function (req, res) {
    res.render('createpost')
})

router.post("/createpost", async function (req, res) {
    const { title,content } = req.body
    const { user_id} =req.session
    await postController.addPost(title, content, user_id)
    res.redirect('/dashboard')
})

module.exports = router;