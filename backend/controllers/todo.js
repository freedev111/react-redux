const Todo = require('../models/Todo');

function create(req, res) {
    const data = req.body;
    const newTodo = new Todo(data);

    newTodo.save()
    .then(todo => {
        res.json(todo);
    })
    .catch(err => {
        res.status(404).json(err);
    })
}

function read(req, res) {
    return req.todo;
}

function update(req, res) {
    const data = res.body;
    const newTodo = Object.assign({}, req.todo, data);

    Todo.save(data)
    .then(todo => {
        res.json(todo);
    })
    .catch(err => {
        res.status(404).json(err);
    })
}

function del(req, res) {
    req.delete()
    .then(todo => {
        req.json(todo);
    })
    .catch(err => {
        res.status(404).json(err);
    })
}

function GetTodo(req, res, todoid) {
    Todo.findById(todoid)
    .then(todo => {
        req.todo = todo;
    })
    .catch(err => {
        res.status(404).json(err);
    })
}

module.exports = {
    create,
    read,
    update,
    del,
    GetTodo,
}
