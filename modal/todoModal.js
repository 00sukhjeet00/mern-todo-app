const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TodoSchema = Schema({
    name: { type: String, required: true },
    isCompeleted: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'user' }
})
module.exports = Todo = mongoose.model('todo', TodoSchema)