const userModel = require("./user")
const postModel = require("./post")
const commentModel = require("./comment")

userModel.hasMany(postModel, {
    foreignKey: "owner"
})
postModel.belongsTo(userModel, {
    foreignKey: "owner"
})

postModel.hasMany(commentModel, {
    foreignKey: "post_id"
})
commentModel.belongsTo(postModel, {
    foreignKey: "post_id"
})

commentModel.belongsTo(userModel, {
    foreignKey: "owner"
})

module.exports = {
    userModel, postModel, commentModel
}