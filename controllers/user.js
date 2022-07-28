const userModel = require('../models/user');

async function addUser(username, email, password) {
    const newUser = await userModel.create({ username: username, email: email, password: password });
    return newUser
}

async function findUser(email, password) {
    const user = await userModel.findOne({ email: email });
    if (!user || !user.checkPassword(password)) {
        return null;
    }
return user;
}

module.exports={
    addUser,
    findUser,
}