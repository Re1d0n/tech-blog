const userModel= require("./user")
const postModel= require("./post")
const commentModel= require("./comment")

userModel.hasMany(postModel)
postModel.belongsTo(userModel)

postModel.hasMany(commentModel)
commentModel.belongsTo(userModel)

commentModel.belongsTo(userModel)

module.exports = {
    userModel, postModel, commentModel
}