const { userModel, postModel } = require("../models")

async function addPost(title, content, owner) {
    const newPost = await postModel.create({ title: title, content: content, owner: owner });
    return newPost
}

async function getAllPosts() {
    const allPosts = await postModel.findAll({
        attributes: [
            "id",
            "title",
            "content",
            "created_at",
        ],
        include: [
            {
                model: userModel,
                attributes: [
                    "username",
                ],
            }
        ]
    });
    return allPosts.map(function (post) {
        return post.get({ plain: true });
    })
}

module.exports = {
    addPost,
    getAllPosts
}