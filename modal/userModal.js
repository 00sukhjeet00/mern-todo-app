const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})
module.exports = User = mongoose.model('user', UserSchema)