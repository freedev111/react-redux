const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
});

const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;