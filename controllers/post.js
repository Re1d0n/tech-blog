const postModel = require('../models/post');

async function addPost(title, content, owner) {
    const newPost = await postModel.create({ title: title, content: content, owner: owner });
    return newPost
}

module.exports={
    addPost,
}